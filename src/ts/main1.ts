interface Menu {
  name: string 
  subMenu: SubMenu[]
}
 
interface SubMenu {
  name: string
}
 
const menus: Menu[] = [
  {
    name: 'Home',
    subMenu: [],
  },
  {
    name: 'About',
    subMenu: [
      {
        name: 'Company',
      },
      {
        name: 'Team',
      },
    ],
  },
  {
    name: 'Products',
    subMenu: [
      {
        name: 'Electronics',
      },
      {
        name: 'Clothing',
      },
      {
        name: 'Accessories',
      },
    ],
  },
  {
    name: 'Services',
    subMenu: [],
  },
  {
    name: 'Contact',
    subMenu: [
      {
        name: 'Phone',
      },
    ],
  },
  {
    name: 'Blog',
    subMenu: [],
  },
  {
    name: 'Gallery',
    subMenu: [
      {
        name: 'Photos',
      },
      {
        name: 'Videos',
      },
      {
        name: 'Events',
      },
    ],
  },
  {
    name: 'FAQ',
    subMenu: [],
  },
  {
    name: 'Downloads',
    subMenu: [
      {
        name: 'Documents',
      },
      {
        name: 'Software',
      },
    ],
  },
  {
    name: 'Support',
    subMenu: [
      {
        name: 'Help Center',
      },
      {
        name: 'Contact Us',
      },
      {
        name: 'Knowledge Base',
      },
    ],
  },
];

const div = document.getElementById('exercise1') as HTMLDivElement
const ul = document.createElement('ul')

for(const menu of menus){
  const li = document.createElement('li')
  const name = document.createTextNode(menu.name)
  li.appendChild(name)

  if(menu.subMenu.length>0) {
    const ulSub = document.createElement('ul')
    for (const subMenu of menu.subMenu){
      const liSub = document.createElement('li')
      const nameSub = document.createTextNode(subMenu.name)
      liSub.appendChild(nameSub)
      ulSub.appendChild(liSub)
    }
    li.appendChild(ulSub)
  }
  ul.appendChild(li)
}
div.appendChild(ul)

export {}