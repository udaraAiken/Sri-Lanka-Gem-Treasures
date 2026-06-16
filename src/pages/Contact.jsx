import { useNotification } from "../hooks/useNotification";

const Contact = () => {
  const { showToast } = useNotification();

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We would love to hear from you.</p>
      </div>
      <section className="section" style={{ maxWidth: "600px" }}>
        <form
          className="inquiry-form"
          onSubmit={(e) => {
            e.preventDefault();
            showToast("Message sent successfully!");
            e.target.reset();
          }}
        >
          <div className="form-group">
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: 500,
              }}
            >
              Name
            </label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: 500,
              }}
            >
              Email
            </label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: 500,
              }}
            >
              Subject
            </label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: 500,
              }}
            >
              Message
            </label>
            <textarea rows="5" required></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary"
            style={{ width: "100%" }}
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
