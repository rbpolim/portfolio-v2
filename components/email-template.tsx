interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
}: EmailTemplateProps) => (
  <div>
    <h1>New message from {name}</h1>
    <p>
      Your email is <strong>{email}</strong>.
    </p>
    <p>Your message is:</p>
    <p>{message}</p>
  </div>
);
