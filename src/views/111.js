
<header
          class="px-4 lg:px-6 h-14 flex items-center border-b border-[#85ffb6]"
        >
          <a href="#" class="flex items-center justify-center">
            <svg
              class="h-6 w-6 text-[#85ffb6]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span class="ml-2 text-2xl font-bold">ThirdPal</span>
          </a>
          <nav class="ml-auto flex gap-4 sm:gap-6">
            <a
              class="text-sm font-medium hover:text-[#85ffb6] transition-colors"
              href="#features"
              >Features</a
            >
            <a
              class="text-sm font-medium hover:text-[#85ffb6] transition-colors"
              href="#why-thirdpal"
              >Why ThirdPal</a
            >
            <a
              class="text-sm font-medium hover:text-[#85ffb6] transition-colors"
              href="#roadmap"
              >Roadmap</a
            >
            <a
              class="text-sm font-medium hover:text-[#85ffb6] transition-colors"
              href="#tech-stack"
              >Tech Stack</a
            >
          </nav>
        </header>

        

renderRoadmapItem(phase, date, items, icon) {
    return html`
      <div class="relative mb-16 md:mb-24">
        <div class="flex flex-col md:flex-row items-center">
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-[#85ffb6] text-[#131c23] mb-4 md:mb-0 md:mr-8 z-10">
            ${this.renderIcon(icon)}
          </div>
          <div class="md:w-1/2 bg-white p-6 rounded-lg shadow-lg md:ml-8">
            <h3 class="text-xl font-bold mb-2">${phase}</h3>
            <p class="text-[#131c23]/60 mb-4">${date}</p>
            <ul class="space-y-2">
              ${items.map(item => html`
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-[#85ffb6] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>${item}</span>
                </li>
              `)}
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  renderIcon(icon) {
    const icons = {
      rocket: html`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`,
      shield: html`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`,
      'magnifying-glass': html`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>`,
      bell: html`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>`,
      code: html`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
      users: html`<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
    };
    return icons[icon] || '';
  }