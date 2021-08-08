import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import {
  Link,
  useI18next,
  Trans,
  useTranslation,
} from "gatsby-plugin-react-i18next"
import { Navbar, Nav, NavDropdown, SplitButton } from "react-bootstrap"
import routes from "../../router"

import "./Navbar.scss"
import Logo from "../../assets/icon/neurond-final-white.svg"

import flagEn from "../../assets/icon/flag-en24.png"
import flagJa from "../../assets/icon/flag-ja24.png"

const Header = () => {
  const { languages, originalPath } = useI18next()
  const { t } = useTranslation()
  const currentLanguageType =
    typeof window !== "undefined"
      ? localStorage["gatsby-i18next-language"]
      : "en"
  const media =
    typeof window !== "undefined"
      ? matchMedia("(max-width: 768px)").matches
      : false

  const [currentMedia, setCurrentMedia] = useState()
  const [currentLanguage, setCurrentLanguage] = useState("")

  const data = useStaticQuery(graphql`
    query {
      allCategory(sort: { fields: sortOrder }) {
        nodes {
          id
          slug
          categoryTranslations {
            languageId
            name
          }
        }
      }
    }
  `)

  const [categories, setCategories] = useState([])
  useEffect(() => {
    setCurrentMedia(media)
    setCurrentLanguage(currentLanguageType)
    const queryCategories = data.allCategory.nodes
    let listCategory = []
    const DEFAULT_LANGUAGE = "en"
    queryCategories &&
      queryCategories.forEach(item => {
        let data_language = item.categoryTranslations.find(
          x => x.languageId === currentLanguage
        )
        if (data_language == null)
          data_language = item.categoryTranslations.find(
            x => x.languageId === DEFAULT_LANGUAGE
          )
        data_language &&
          listCategory.push({
            id: item.id,
            path: `/categories/${item.slug}`,
            ...data_language,
          })
      })
    setCategories(listCategory)
  }, [data.allCategory.nodes, media, currentLanguageType, currentLanguage])

  routes.forEach(route => {
    if (route.name === "blogs") {
      route.children = categories
    }
  })

  const multipleLanguageDropdown = (
    <React.Fragment>
      <img
        alt=""
        className="mul-language__item__flag-icon"
        src={currentLanguage === "ja" ? flagJa : flagEn}
      ></img>
      <Trans>{currentLanguage}</Trans>
    </React.Fragment>
  )

  const toBlogs = () => {
    window.location.href = "/blogs"
  }

  return (
    <header className="header fixed-top">
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
        <Navbar.Brand>
          <Link to="/" className="nav-link__logo" rel="canonical">
            <img
              src={Logo}
              alt="NeurondAI-logo"
              className="nav-link__logo__image"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggler navbar-toggler-custom"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {routes.map((item, index) => {
              if (item.active) {
                if (item.children && !currentMedia) {
                  return (
                    <NavDropdown
                      key={index}
                      title={t(`${item.name}`)}
                      id={`${!currentMedia ? `collapsible-nav-dropdown` : ``}`}
                      className="drop-menu"
                      renderMenuOnMount={true}
                      onToggle={item.name === "blogs" ? toBlogs : null}
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          className="sub-menu_service nav-link"
                          active-classname="Active"
                        >
                          <Trans>{child.name}</Trans>
                        </Link>
                      ))}
                    </NavDropdown>
                  )
                } else if (item.children && currentMedia) {
                  return (
                    <SplitButton
                      key={index}
                      title={t(`${item.name}`)}
                      onClick={item.name === "blogs" ? toBlogs : null}
                      className="split-button"
                      // bsPrefix="h4-text btn-primary"
                      aria-expanded={false}
                    >
                      {item.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          className="sub-menu_service nav-link"
                          active-classname="Active"
                        >
                          <Trans>{child.name}</Trans>
                        </Link>
                      ))}
                    </SplitButton>
                  )
                } else {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className="navbar-menu nav-link"
                      active-classname="Active"
                    >
                      <Trans>{item.name}</Trans>
                    </Link>
                  )
                }
              }
              return null
            })}

            {/* Config multiple language */}
            {currentMedia ? (
              <SplitButton
                title={multipleLanguageDropdown}
                className="split-button"
                // bsPrefix="h4-text btn-primary"
              >
                {languages
                  .filter(item => item !== currentLanguage)
                  .map(lng => {
                    return (
                      <Link
                        key={lng}
                        to={originalPath}
                        language={lng}
                        className="sub-menu_language nav-link"
                        active-classname="Active"
                      >
                        <img
                          alt=""
                          className="mul-language__item__flag-icon"
                          src={`${lng === "ja" ? flagJa : flagEn}`}
                        />
                        <Trans>{lng}</Trans>
                      </Link>
                    )
                  })}
              </SplitButton>
            ) : (
              <NavDropdown
                title={multipleLanguageDropdown}
                id="collapsible-nav-dropdown"
                className="drop-menu"
                renderMenuOnMount={true}
              >
                {languages
                  .filter(item => item !== currentLanguage)
                  .map(lng => {
                    return (
                      <Link
                        key={lng}
                        to={originalPath}
                        language={lng}
                        className="sub-menu_language nav-link"
                        active-classname="Active"
                      >
                        <img
                          alt=""
                          className="mul-language__item__flag-icon"
                          src={`${lng === "ja" ? flagJa : flagEn}`}
                        ></img>
                        <Trans>{lng}</Trans>
                      </Link>
                    )
                  })}
              </NavDropdown>
            )}

            {/* Config multiple language */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  categories: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
