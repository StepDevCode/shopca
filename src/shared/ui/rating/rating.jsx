export const renderStars = (rating) => {
  const stars = []

  for (let i = 0; i < rating; i++) {
    stars.push(
      <span className="star" key={i}>
        &#9733;
      </span>
    )
  }
  return stars
}
