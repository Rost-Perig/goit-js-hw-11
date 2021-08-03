export class Timer {
  constructor(FINAL_DATE, daysEl, hoursEl, minsEl, secsEl, colonEl) {
    this.FIN_DATE = new Date(FINAL_DATE).getTime();
    this.isActive = false;
    this.intervalIdCountDown = null;
    this.daysEl = daysEl;
    this.hoursEl = hoursEl;
    this.minsEl = minsEl;
    this.secsEl = secsEl;
    this.colonEl = colonEl;
  }

  startCount = () => {
    if (this.isActive) {
      return;
    }
    this.intervalIdCountDown = setInterval(() => {
      this.isActive = true;
      const nowDate = Date.now();
      const deltaTime = this.FIN_DATE - nowDate;
      const { days, hours, mins, secs } = this.getTimeComponents(deltaTime);
      // console.log(`${days}:${hours}:${mins}:${secs}`);
      this.daysEl.textContent = `${days}`;
      this.hoursEl.textContent = `${hours}`;
      this.minsEl.textContent = `${mins}`;
      this.secsEl.textContent = `${secs}`;
      this.colonBlinking();
      
    }, 1000);
  }

  stopCount = () =>  {
    clearInterval(this.intervalIdCountDown);
    this.daysEl.textContent = '00';
    this.hoursEl.textContent = '00';
    this.minsEl.textContent = '00';
    this.secsEl.textContent = '00';
    this.isActive = false;
  }

  getTimeComponents = (time) => {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return {days, hours, mins, secs}
  }

   pad = (value) => {
    return String(value).padStart(2, '0');
  }

  colonBlinking = () => {
    this.colonEl.forEach((colon) => {
      if (colon.classList.contains("opacity")) {
        colon.classList.remove("opacity");
      } else {
        colon.classList.add("opacity");
      }
    })
  }
}