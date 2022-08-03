import React from "react";
import Footer from "../../components/footer/Footer";
import Form from "../../components/form/Form";
import Logo from "../../components/logo/Logo";
import Paragraph from "../../components/paragraph/Paragraph";

export default function Home() {
  return (
    <div className="body">
      <Logo />
      <h1 className="text-center">Sign In Page</h1>
      <Paragraph />
      <Form />
      <Footer />
    </div>
  );
}
