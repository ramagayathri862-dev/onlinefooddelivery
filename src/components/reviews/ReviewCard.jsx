function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.name}</h3>

      <p className="stars">
        ⭐⭐⭐⭐⭐
      </p>

      <p>{review.comment}</p>
    </div>
  );
}

export default ReviewCard;