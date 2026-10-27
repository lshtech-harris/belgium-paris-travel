/**
 * Belgium & Paris Travel Companion 2026 - 核心應用與記帳引擎
 */

// LocalStorage Key
const STORAGE_KEY = 'belgium_paris_travel_expenses_v1';
const TRAVELERS_KEY = 'belgium_paris_travelers_v1';
const RATE_KEY = 'belgium_paris_eur_twd_rate_v1';

// Default State
let currentTravelers = ['我', '朋友 A', '朋友 B'];
let currentRate = 35.0; // 1 EUR = 35 TWD
let expenses = [];

// Initialize App
function initApp() {
  loadStoredData();
  updateTopLedgerBadges();
  setupNavigationActiveState();
  initWeatherWidget();
}

// Live Weather Forecast for Day Pages (Open-Meteo API)
function initWeatherWidget() {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;

  const lat = widget.getAttribute('data-lat') || '50.85';
  const lon = widget.getAttribute('data-lon') || '4.35';
  const tz = widget.getAttribute('data-timezone') || 'Europe/Brussels';
  const cityName = widget.getAttribute('data-city') || '布魯塞爾 Brussels';

  const tempEl = document.getElementById('weather-temp');
  const descEl = document.getElementById('weather-desc');
  const iconEl = document.getElementById('weather-icon');
  const rangeEl = document.getElementById('weather-range');
  const cityEl = document.getElementById('weather-city');

  if (cityEl) cityEl.textContent = cityName;

  function getWeatherInfo(code) {
    if (code === 0) return { text: '晴朗無雲', icon: '☀️' };
    if ([1, 2, 3].includes(code)) return { text: '多雲時晴', icon: '🌤️' };
    if ([45, 48].includes(code)) return { text: '秋霧繚繞', icon: '🌫️' };
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return { text: '短暫陣雨', icon: '🌧️' };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { text: '局部初雪/雨夾雪', icon: '🌨️' };
    if ([95, 96, 99].includes(code)) return { text: '雷陣雨', icon: '⛈️' };
    return { text: '陰天多雲', icon: '☁️' };
  }

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=${encodeURIComponent(tz)}`)
    .then(res => res.json())
    .then(data => {
      if (data && data.current_weather) {
        const current = data.current_weather;
        const info = getWeatherInfo(current.weathercode);
        const maxTemp = Math.round(data.daily.temperature_2m_max[0]);
        const minTemp = Math.round(data.daily.temperature_2m_min[0]);
        const rainProb = (data.daily.precipitation_probability_max && data.daily.precipitation_probability_max[0] !== undefined)
          ? data.daily.precipitation_probability_max[0]
          : 0;

        if (tempEl) tempEl.textContent = `${Math.round(current.temperature)}°C`;
        if (descEl) descEl.textContent = `${info.text} • 降雨率 ${rainProb}%`;
        if (iconEl) iconEl.textContent = info.icon;
        if (rangeEl) rangeEl.textContent = `高 ${maxTemp}° / 低 ${minTemp}°`;
      }
    })
    .catch(err => {
      console.log('Open-Meteo weather fallback');
      const fallbackTemp = widget.getAttribute('data-fallback-temp') || '12°C';
      const fallbackDesc = widget.getAttribute('data-fallback-desc') || '多雲微涼 (深秋歐陸)';
      const fallbackRange = widget.getAttribute('data-fallback-range') || '高 15° / 低 7°';
      if (tempEl) tempEl.textContent = fallbackTemp;
      if (descEl) descEl.textContent = fallbackDesc;
      if (iconEl) iconEl.textContent = '🌤️';
      if (rangeEl) rangeEl.textContent = fallbackRange;
    });
}

// Load Data from LocalStorage
function loadStoredData() {
  try {
    const savedTravelers = localStorage.getItem(TRAVELERS_KEY);
    if (savedTravelers) {
      currentTravelers = JSON.parse(savedTravelers);
    }
    const savedRate = localStorage.getItem(RATE_KEY);
    if (savedRate) {
      currentRate = parseFloat(savedRate) || 35.0;
    }
    const savedExpenses = localStorage.getItem(STORAGE_KEY);
    if (savedExpenses) {
      expenses = JSON.parse(savedExpenses);
    } else {
      // Seed initial sample expenses if empty
      expenses = [
        {
          id: 'exp-init-1',
          date: '2026-10-31',
          dayId: 'day1',
          title: 'Maison Dandoy 雙拼鬆餅',
          amountEUR: 18.5,
          category: 'food',
          payer: currentTravelers[0] || '我',
          splitWith: [...currentTravelers],
          note: '布魯塞爾脆皮鬆餅 + 列日珍珠糖鬆餅'
        },
        {
          id: 'exp-init-2',
          date: '2026-10-31',
          dayId: 'day1',
          title: 'Frites Atelier 松露薯條',
          amountEUR: 15.0,
          category: 'food',
          payer: currentTravelers[1] || '朋友 A',
          splitWith: [...currentTravelers],
          note: '大份松露蛋黃醬與燉牛肉沾醬'
        }
      ];
      saveExpenses();
    }
  } catch (e) {
    console.error('Failed to load storage data:', e);
  }
}

// Save Expenses to LocalStorage
function saveExpenses() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
    localStorage.setItem(TRAVELERS_KEY, JSON.stringify(currentTravelers));
    localStorage.setItem(RATE_KEY, currentRate.toString());
  } catch (e) {
    console.error('Failed to save data:', e);
  }
  updateTopLedgerBadges();
}

// Update Top Sticky Badge (Today's Total on Day Pages)
function updateTopLedgerBadges() {
  // If we are on day1, day2, etc.
  const path = window.location.pathname;
  let dayMatch = path.match(/day(\d+)\.html/);
  let currentDayId = dayMatch ? `day${dayMatch[1]}` : null;

  if (currentDayId) {
    const dayTotalEl = document.getElementById(`daily-total-${currentDayId}`);
    if (dayTotalEl) {
      const dayTotal = expenses
        .filter(exp => exp.dayId === currentDayId)
        .reduce((sum, exp) => sum + (parseFloat(exp.amountEUR) || 0), 0);
      const dayTWD = Math.round(dayTotal * currentRate);
      dayTotalEl.innerHTML = `€${dayTotal.toFixed(2)} <span class="text-xs text-stone-400 font-normal">(≈ NT$ ${dayTWD.toLocaleString()})</span>`;
    }
  }
}

// Setup Active Tab in Day Selector
function setupNavigationActiveState() {
  const path = window.location.pathname;
  document.querySelectorAll('[data-nav-day]').forEach(el => {
    const target = el.getAttribute('data-nav-day');
    if (path.includes(target)) {
      el.classList.add('bg-[#B45309]', 'text-white', 'shadow-soft');
      el.classList.remove('text-stone-600', 'hover:bg-stone-100');
    }
  });
}

// Modal Quick Add
function openDailyExpenseModal(dayId) {
  const modal = document.getElementById('dailyExpenseModal');
  if (!modal) return;
  
  const daySelect = document.getElementById('modalDaySelect');
  if (daySelect) daySelect.value = dayId;
  
  // Render payer options
  const payerSelect = document.getElementById('modalPayer');
  if (payerSelect) {
    payerSelect.innerHTML = currentTravelers
      .map(t => `<option value="${t}">${t}</option>`)
      .join('');
  }

  // Render split checkboxes
  const splitContainer = document.getElementById('modalSplitCheckboxes');
  if (splitContainer) {
    splitContainer.innerHTML = currentTravelers
      .map(t => `
        <label class="flex items-center gap-1.5 text-xs bg-stone-100 px-2.5 py-1.5 rounded-lg cursor-pointer">
          <input type="checkbox" name="splitTraveler" value="${t}" checked class="rounded text-[#B45309] focus:ring-[#B45309]" />
          <span>${t}</span>
        </label>
      `).join('');
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeDailyExpenseModal() {
  const modal = document.getElementById('dailyExpenseModal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Submit Modal Expense
function submitDailyExpense(e) {
  if (e) e.preventDefault();
  
  const title = document.getElementById('modalTitle')?.value.trim();
  const amountEUR = parseFloat(document.getElementById('modalAmount')?.value);
  const dayId = document.getElementById('modalDaySelect')?.value || 'day1';
  const category = document.getElementById('modalCategory')?.value || 'food';
  const payer = document.getElementById('modalPayer')?.value || currentTravelers[0];
  const note = document.getElementById('modalNote')?.value.trim() || '';

  const checkedTravelers = Array.from(document.querySelectorAll('input[name="splitTraveler"]:checked'))
    .map(cb => cb.value);

  if (!title || isNaN(amountEUR) || amountEUR <= 0) {
    alert('請填寫完整項目名稱與有效金額！');
    return;
  }

  if (checkedTravelers.length === 0) {
    alert('分攤成員至少需選 1 人！');
    return;
  }

  const newExp = {
    id: 'exp-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    dayId: dayId,
    title: title,
    amountEUR: amountEUR,
    category: category,
    payer: payer,
    splitWith: checkedTravelers,
    note: note
  };

  expenses.unshift(newExp);
  saveExpenses();
  closeDailyExpenseModal();

  // Reset form
  const form = document.getElementById('dailyExpenseForm');
  if (form) form.reset();

  // If on ledger page, re-render
  if (typeof renderLedgerPage === 'function') {
    renderLedgerPage();
  } else {
    // Show quick feedback
    showToast(`已成功記錄：€${amountEUR.toFixed(2)} (${title})`);
  }
}

// Simple Toast Notification
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#1E293B] text-white px-4 py-2.5 rounded-2xl text-xs font-bold shadow-float flex items-center gap-2 border border-white/20 animate-fade-in';
  toast.innerHTML = `<span>💰</span> <span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2400);
}

// Run on page load
document.addEventListener('DOMContentLoaded', initApp);
