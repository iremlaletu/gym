// images

import Amsterdam from "../assets/img/workouts/amsterdam.png";
import Dubai from "../assets/img/workouts/dubai.png";
import Istanbul from "../assets/img/workouts/istanbul.jpg";
import Losangeles from "../assets/img/workouts/losangeles.png";
import Newyork from "../assets/img/workouts/newyork.png";
import Paris from "../assets/img/workouts/paris.jpg";
import Rio from "../assets/img/workouts/rio.jpg";
import Sydney from "../assets/img/workouts/sydney.jpg";
import Tokyo from "../assets/img/workouts/tokyo.jpg";

import CommunityImg1 from "../assets/img/community/img1.jpg";
import CommunityImg2 from "../assets/img/community/img2.jpg";
import CommunityImg3 from "../assets/img/community/img3.jpg";
import CommunityImg4 from "../assets/img/community/img4.jpg";
import CommunityImg5 from "../assets/img/community/img5.jpg";
import CommunityImg6 from "../assets/img/community/img6.jpg";
import CommunityImg7 from "../assets/img/community/img7.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const nav = [
  { name: "Home", id: "banner" },
  { name: "About", id: "about" },
  { name: "Workouts", id: "workouts" },
  { name: "Pricing", id: "pricing" },
  { name: "Community", id: "community" },
  { name: "FAQ", id: "faq" },
];

export const workouts = {
  programs: [
    {
      image: Newyork,
      name: "New York",
    },
    {
      image: Tokyo,
      name: "Tokyo",
    },
    {
      image: Paris,
      name: "Paris",
    },
    {
      image: Sydney,
      name: "Sydney",
    },
    {
      image: Dubai,
      name: "Dubai",
    },
    {
      image: Amsterdam,
      name: "Amsterdam",
    },
    {
      image: Losangeles,
      name: "Los Angeles",
    },
    {
      image: Rio,
      name: "Rio de Janeiro",
    },
    {
      image: Istanbul,
      name: "Istanbul",
    },
  ],
};

export const memberships = [
  {
    id: 1,
    membershipType: "Local",
    description: "Perfect for regular practitioners in a single city.",
    monthlyPrice: "49",
    features: [
      "Unlimited access to studios in your city",
      "Option for 1-on-1 private sessions (extra fee or limited free sessions)",
      "Access to multiple yoga styles (Hatha, Vinyasa, Yin, etc.)",
      "Participation in local events",
      "Occasional access to studios abroad upon request (extra fee)",
    ],
  },
  {
    id: 2,
    membershipType: "Global",
    description:
      "Ideal for digital nomads, access yoga studios worldwide without limits.",
    monthlyPrice: "89",
    features: [
      "Unlimited access to studios across all location",
      "View schedules and book classes in any city",
      "Online guidance and support",
      "Participation in global yoga events",
    ],
  },
  {
    id: 3,
    membershipType: "VIP",
    description:
      "Elevate your yoga journey with unlimited access and exclusive perks.",
    monthlyPrice: "99",
    features: [
      "Priority booking and access to all studios worldwide",
      "Unlimited private sessions with experienced instructors",
      "Free participation in exclusive retreats and workshops",
      "Discounts on yoga gear and equipment",
    ],
  },
];

export const community = {
  testimonials: [
    {
      image: CommunityImg1,
      name: "James L.",
      message:
        "“Finally found a gym where I feel comfortable. Excellent equipment and the trainers are fantastic”",
    },
    {
      image: CommunityImg3,
      name: "Emily R.",
      message:
        "“The yoga classes here are a game-changer. The coaches are so attentive, and the vibe is amazing!”",
    },
    {
      image: CommunityImg2,
      name: "Sophia T.",
      message:
        "“Clean facilities, friendly staff, and the best lifting area in town. Highly recommend!”",
    },
    {
      image: CommunityImg4,
      name: "Michael H.",
      message:
        "“I’ve been to a lot of gyms, but this one stands out for its personal training programs. Worth every penny.”",
    },
    {
      image: CommunityImg5,
      name: "John D.",
      message:
        "This gym is amazing! The equipment is top-notch. You can tell they really care about the details.",
    },
    {
      image: CommunityImg6,
      name: "Jane S.",
      message:
        "I love the variety of classes offered here. Yoga and boxing are my favorites!",
    },
    {
      image: CommunityImg7,
      name: "Olivia P.",
      message: "A perfect place to stay fit. Highly recommend it!",
    },
  ],
};

export const faq = {
  accordions: [
    {
      question: "How can I book a workout class?",
      answer:
        "You can easily book a workout class through our gym app or website. Simply select your preferred class, choose a time slot, and confirm your booking. If you prefer, you can also book in person at the front desk. Make sure to book early as spots can fill up quickly!",
    },
    {
      question: "Do I need a personal trainer?",
      answer:
        "A personal trainer can be helpful if you’re new to working out, want to learn proper techniques, or need motivation. However, many gyms also offer beginner-friendly classes and resources to guide you.",
    },
    {
      question: "Are group classes suitable for beginners?",
      answer:
        "Absolutely! Many group classes are designed with beginners in mind. Inform the instructor that you’re new, and they’ll help you modify movements to suit your fitness level.",
    },
    {
      question: "What are the gym’s operating hours?",
      answer:
        "Gym Center is open 7 days a week from 5 AM to 11 PM, so you can work out whenever it fits your schedule.",
    },
    {
      question: "How do I cancel my membership?",
      answer:
        "To cancel your membership, simply visit the front desk or contact our customer service team. They will guide you through the cancellation process and ensure everything is taken care of. Please note that a notice period may apply depending on your membership terms.",
    },
    {
      question: "Is there a locker room for members?",
      answer:
        "Absolutely! We have spacious locker rooms with secure lockers, showers, and changing facilities for your convenience.",
    },
  ],
};

export const FooterData = {
  pdfLinks: [
    { href: "/pdfs/privacy-policy.pdf", text: "Privacy Policy & Terms of Use" },
    { href: "/pdfs/membership-agreement.pdf", text: "Membership Agreement" },
    {
      href: "/pdfs/membership-rules.pdf",
      text: "Membership Rules & Regulations",
    },
    { href: "/pdfs/cancellation-form.pdf", text: "Cancellation Form" },
  ],

  socialMediaLinks: [
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { name: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  ],
};
