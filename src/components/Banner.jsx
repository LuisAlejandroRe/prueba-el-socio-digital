
export const Banner = ({ img }) => {
  return (
    <div className="banner__container">
      {
        img && <img src={img} alt="banner image" />
      }
    </div>
  )
}
