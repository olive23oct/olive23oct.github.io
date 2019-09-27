import React from 'react'
import Link from 'next/link'
import "../style.css";

const links = [
  { href: '/', label: 'home'},
  { href: '/profile', label: 'profile' },
  { href: '/project', label: 'project'},
  { href: 'https://github.com/olive23oct', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (

  <nav className="navbar navbar-light bg-light fixed-top">
    <div className="container">
      <Link href='/'>
        <a className="navbar-brand">유희진 portfolio</a>
      </Link>
      <div className="nav-items" id="navbarSupportedContent">
        <ul className="navbar-nav">
          { links.map(({ key, href, label }) => (
            <li key={key} className="navbar-list">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  <style jsx>{`
    :
  
  `}
  </style>
  </nav>
)

export default Nav
