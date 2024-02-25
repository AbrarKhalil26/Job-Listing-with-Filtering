import React from 'react'

const Card = ({ handleClick, job }) => {
  const {id, company, logo, new: newJob, featured, position, role, level, postedAt, contract, location, languages, tools} = job;
  const tags = [role, level, ...languages, ...tools];
  
  return (
    <div
        className="cardJob p-4"
        key={id}
        style={
          featured ? { borderLeft: "7px solid var(--Desaturated-Dark-Cyan)" } : {}
        }
      >
        <div className="details">
          <img src={logo} alt={company} />
  
          <div className="text">
            <p className="d-flex gap-3 align-items-center flex-wrap">
              <span className="company">{company}</span>
              <span className={`new ${newJob ? "" : "p-0"}`}>
                {newJob ? "new!" : ""}
              </span>
              <span className={`featured ${featured ? "" : "p-0"}`}>
                {featured ? "featured" : ""}
              </span>
            </p>
  
            <h5 className="title pt-2 fw-bold">{position}</h5>
  
            <p className="d-flex gap-3 flex-wrap">
              <span>{postedAt}</span>
              <span>{contract}</span>
              <span>{location}</span>
            </p>
          </div>
        </div>
        <div className="languages d-flex gap-3 flex-wrap">
          {tags.map((tag, index) => (
            <span className="tag px-2 py-1" key={index} onClick={handleClick}>
              {tag}
            </span>
          )
          )}
        </div>
      </div>
  )
}

export default Card
