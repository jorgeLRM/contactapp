import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContact } from "../api/ContactService";

const ContactDetail = ({ updateContact, updateImage }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    title: "",
    status: "",
  });

  const { id } = useParams();

  const fetchContact = async (id) => {
    try {
      const { data } = await getContact(id);
      setContact(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContact(id);
  }, [])
  return <div>ContactDetail</div>;
};

export default ContactDetail;
