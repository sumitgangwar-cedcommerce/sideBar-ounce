import React, { useState } from 'react'
import { Minus, Plus } from 'react-feather';
import './Main.css'

export interface SideBarI {
  onChange: (newPath: string) => void;
  logo?: React.ReactNode;
  children?:React.ReactNode;
}

interface MenuI {
  id: string | number;
  label: string;
  path: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: MenuI[];
}

interface SectionI {
  title?: string | React.ReactNode;
  menu: MenuI[];
  onChange: (newPath: string) => void;
}

const SideBar = ({onChange, logo, children }: SideBarI) => {

  console.log( typeof children);

  return (
    <aside className='inte-sideBar'>
      {
        logo && <div className='inte-sideBar__logo'>{logo}</div>
      }
      {
        children
      }
    </aside>
  )
}

const Section = ({ title, menu , onChange }: SectionI) => {
  const currentPath = window.location.pathname
  const [expandedItem, setExpandedItem] = useState<any>({})

  const expandIconClickHandler = (e: React.MouseEvent, path: string, flag: boolean) => {
    e.stopPropagation()
    setExpandedItem((prev: any) => ({ ...prev, [path]: !flag }))
  }

  const makeMenuList = (item: MenuI, parent = "") => {
    return (
      <li
        key={item.id}
        className={`inte-sideBar__listItem ${parent + item.path === currentPath ? 'inte-sideBar__listItem--active' : ''} ${item.badge ? 'inte-sideBar__listItem--withBadge' : ''}`}
      >
        <a
          onClick={() => onChange(parent + item.path)}
        >
          <div className='inte-sideBar__linkBody'>
            {
              item.icon && <div className='inte-sideBar__Icon'>
                {item.icon}
              </div>
            }
            <div className='inte-sideBar__label'>
              {item.label}
            </div>
          </div>
          {
            item.badge && <div className='inte-sideBar__badge'>
              {item.badge}
            </div>
          }
        </a>
      </li>
    )
  }

  const MakeExpandableItem = (parentItem: MenuI) => {
    const active = expandedItem[parentItem.path] !== undefined ? expandedItem[parentItem.path] : currentPath.includes(parentItem.path)
    return (
      <li
        key={parentItem.id}
        className={`inte-sideBar__listItem inte-sideBar__listItem--expandable ${currentPath.includes(parentItem.path) ? 'inte-sideBar__listItem--active' : ''} ${active ? 'inte-sideBar__listItem--expandable--active' : ''}`}
      >
        <a
          onClick={(e) => expandIconClickHandler(e, parentItem.path, active)}
        >
          <div className='inte-sideBar__linkBody'>
            {
              parentItem.icon && <div className='inte-sideBar__Icon'>
                {parentItem.icon}
              </div>
            }
            <div className='inte-sideBar__label'>
              {parentItem.label}
            </div>
          </div>

          <div className='inte-sideBar__expandIcon'>
            {
              active ? <Minus /> : <Plus />
            }
          </div>
        </a>
        {
          active && <ul
            className='inte-sideBar__childList'
          >
            {
              parentItem.children?.map((item) => {
                return makeMenuList(item, parentItem.path)
              })
            }
          </ul>
        }
      </li>
    )
  }
  return (
    <div className='inte-sideBar__section'>
      {
        title && <div className='inte-sideBar__title'>{title}</div>
      }
      <nav>
        <ul className='inte-sideBar__list'>
          {
            menu.map((item) => {
              if (item.children) return MakeExpandableItem(item)
              return makeMenuList(item)
            })
          }
        </ul>
      </nav>
    </div>
  )
}

SideBar.Section = Section


export default SideBar
