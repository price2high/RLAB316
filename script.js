 document.addEventListener('DOMContentLoaded', function() {
    const mainEl = document.querySelector('main');
    mainEl.style.backgroundColor = 'var(--main-bg)';
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');
    const topMenuEl = document.getElementById('top-menu');
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
    topMenuEl.classList.add('flex-around');
    var menuLinks = [
        {text: 'about', href: '/about'},
        {text: 'catalog', href: '#', subLinks: [
          {text: 'all', href: '/catalog/all'},
          {text: 'top selling', href: '/catalog/top'},
          {text: 'search', href: '/catalog/search'},
        ]},
        {text: 'orders', href: '#' , subLinks: [
          {text: 'new', href: '/orders/new'},
          {text: 'pending', href: '/orders/pending'},
          {text: 'history', href: '/orders/history'},
        ]},
        {text: 'account', href: '#', subLinks: [
          {text: 'profile', href: '/account/profile'},
          {text: 'sign out', href: '/account/signout'},
        ]},
      ];
    menuLinks.forEach(link => {
      const linkElement = document.createElement('a');
      linkElement.href = link.href;
      linkElement.textContent = link.text;
      topMenuEl.appendChild(linkElement);
    });
      const subMenuEl = document.getElementById('sub-menu');
      subMenuEl.style.height = '100%';
      subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
      subMenuEl.classList.add('flex-around');
        topMenuEl.addEventListener('click', function(event) {
          event.preventDefault();
          if (!event.target.matches('a')) {
            return;
          }
          console.log('Clicked link:', event.target.textContent);
        });
  });

