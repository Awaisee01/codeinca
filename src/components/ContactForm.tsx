import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

// ✅ Animated success icon
const AnimatedSuccessIcon = () => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ duration: 0.6, ease: "backOut" }}
    className="relative"
  >
    <CheckCircle className="w-16 h-16 text-green-500" />
    <motion.div
      className="absolute inset-0 w-16 h-16 border-4 border-green-500 rounded-full"
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{ duration: 1.2, repeat: Infinity }}
    />
  </motion.div>
);

// ✅ Define your form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // ✅ Update form state
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ Submit to EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.projectType ||
      !formData.message
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_ysiyazq", // ✅ Your service ID
        "template_k1ntl99", // ✅ Your template ID (check this on EmailJS)
        {
          user_name: `${formData.firstName} ${formData.lastName}`, // ✅ Match template variable
          user_email: formData.email, // ✅ Match template variable
          project_type: formData.projectType, // ✅ Match template variable
          message: formData.message, // ✅ Match template variable
        },
        "cvEJ2rtCSuOIA4m90" // ✅ Your EmailJS public key
      );

      setShowSuccess(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectType: "",
          message: "",
        });
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.log("error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-card border-border shadow-lg">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="mt-2"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div>
              <Label htmlFor="projectType">Project Type *</Label>
              <Select
                value={formData.projectType}
                onValueChange={(value) =>
                  handleInputChange("projectType", value)
                }
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Development">
                    Web Development
                  </SelectItem>
                  <SelectItem value="Mobile App">Mobile App</SelectItem>
                  <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                  <SelectItem value="Consulting">Consulting</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div className="flex justify-center">
              {showSuccess ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  <AnimatedSuccessIcon />
                  <p className="text-green-500 font-medium mt-4">
                    Message sent successfully!
                  </p>
                </motion.div>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold py-4"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              )}
            </div>
            <ReCAPTCHA
              sitekey="6LdXxYgrAAAAAN9h6_u1CJMtRuhr0Rp7WDGTcmN6"
              onChange={(token) => setCaptchaToken(token)}
              className="mx-auto"
            />
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
