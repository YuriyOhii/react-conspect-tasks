import Alert from "./components/Alert/Alert";
export default function App() {
  return (
    <>
      <Alert variant='info'>Would you like to browse our recommended products?</Alert>
      <Alert variant='warning' outlined>Please update your profile contact information!</Alert>
      <Alert variant='error' elevated>There was an error during your last transaction!</Alert>
      <Alert variant='success' outlined elevated>Payment recieved, thank you for your perchase!</Alert>
      
    </>);
}
