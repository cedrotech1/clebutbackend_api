import db from "../database/models/index.js";
const { Companies, Services, Projects, FAQs, Users, Testimonials, Partners, ContactMessages} = db;

export const createContactMessage = async (req, res) => {
  try {
    const message = await ContactMessages.create(req.body);
    res.status(201).json({ success: true, message: 'Message sent successfully', data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAllContactMessages = async (req, res) => {
  try {
    const messages = await ContactMessages.findAll();
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getContactMessageById = async (req, res) => {
  try {
    const message = await ContactMessages.findByPk(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });

    res.status(200).json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateContactMessage = async (req, res) => {
  try {
    const message = await ContactMessages.findByPk(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });

    await message.update(req.body);
    res.status(200).json({ success: true, message: "Message updated", data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteContactMessage = async (req, res) => {
  try {
    const message = await ContactMessages.findByPk(req.params.id);
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });

    await message.destroy();
    res.status(200).json({ success: true, message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
