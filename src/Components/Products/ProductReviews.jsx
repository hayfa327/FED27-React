import { useParams } from "react-router";

const reviews = {
  1: [
    { id: 1, author: "John D.", rating: 5, text: "Best laptop I've ever owned!" },
    { id: 2, author: "Sarah M.", rating: 4, text: "Great performance, a bit pricey." },
    { id: 3, author: "Mike R.", rating: 5, text: "Perfect for development work." },
  ],
  2: [
    { id: 1, author: "Emily K.", rating: 5, text: "Amazing sound quality!" },
    { id: 2, author: "Tom H.", rating: 4, text: "Comfortable for long sessions." },
  ],
  3: [
    { id: 1, author: "Alex P.", rating: 5, text: "Super comfortable for running." },
    { id: 2, author: "Lisa W.", rating: 5, text: "Great support and cushioning." },
  ],
  4: [
    { id: 1, author: "Chris B.", rating: 4, text: "Makes great coffee every morning." },
    { id: 2, author: "Nancy L.", rating: 5, text: "Easy to use and clean." },
  ],
};

export function ProductReviews() {
  const { productId } = useParams();
  const productReviews = reviews[productId] || [];

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div>
      <h3>Customer Reviews ({productReviews.length})</h3>
      {productReviews.length === 0 ? (
        <p>No reviews yet for this product.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {productReviews.map((review) => (
            <div
              key={review.id}
              style={{
                backgroundColor: "white",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>{review.author}</strong>
                <span style={{ color: "#f39c12" }}>{renderStars(review.rating)}</span>
              </div>
              <p style={{ margin: 0, color: "#666" }}>{review.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
