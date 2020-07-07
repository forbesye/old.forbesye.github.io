import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          © 2020 Jefferson Ye
        </span>
        <span className="footerCopyrights">
          <a href="https://www.linkedin.com/in/jefferson-ye/">LinkedIn</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://github.com/forbesye">GitHub</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://www.facebook.com/ForbesYe">Facebook</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://www.instagram.com/forbes.ye/">Instagram</a>
        </span>
        <span className="footerCopyrights">
          Built with <a href="https://www.gatsbyjs.org">GatsbyJS</a> and <a href="https://reactjs.org/">ReactJS</a>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
