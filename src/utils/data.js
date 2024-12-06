// images

import MuscleImg from "../assets/img/workouts/muscle.jpg";
import BoxingImg from "../assets/img/workouts/boxing.jpg";
import YogaImg from "../assets/img/workouts/yoga.jpg";
import BattleRopeImg from "../assets/img/workouts/rope.png";
import ResistanceImg from "../assets/img/workouts/resistance.png";
import StrengthImg from "../assets/img/workouts/strength.jpg";
import FullBodyImg from "../assets/img/workouts/fullbody.jpg";
import PilatesImg from "../assets/img/workouts/pilates.png";
import WeightLossImg from "../assets/img/workouts/weightLoss.jpg";

import CommunityImg1 from "../assets/img/community/img1.jpg";
import CommunityImg2 from "../assets/img/community/img2.jpg";
import CommunityImg3 from "../assets/img/community/img3.jpg";
import CommunityImg4 from "../assets/img/community/img4.jpg";
import CommunityImg5 from "../assets/img/community/img5.jpg";
import CommunityImg6 from "../assets/img/community/img6.jpg";
import CommunityImg7 from "../assets/img/community/img7.jpg";

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
      image: MuscleImg,
      name: "Muscle Building",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
    },
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: StrengthImg,
      name: "Strength",
    },
    {
      image: PilatesImg,
      name: "Pilates",
    },
    {
      image: WeightLossImg,
      name: "Weight Loss",
    },
  ],
};

export const pricing = {
  plans: [
    {
      name: "Basic",
      price: "89",
      list: [
        { name: "unlimited gym access" },
        { name: "1 training programs" },
        { name: "free fitness consultation" },
      ],
      delay: 600,
    },
    {
      name: "Premium",
      price: "139",
      list: [
        { name: "unlimited gym access" },
        { name: "5 training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
      ],
      delay: 800,
    },
    {
      name: "Elite",
      price: "189",
      list: [
        { name: "unlimited gym access" },
        { name: "all training programs" },
        { name: "free fitness consultation" },
        { name: "personal trainer" },
        { name: "50% off drinks" },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  testimonials: [
    {
      image: CommunityImg1,
      name: "James L.",
      message:
        "“Finally found a gym where I feel comfortable. Excellent equipment and the trainers are fantastic”",
    },
    {
      image: CommunityImg2,
      name: "Sophia T.",
      message:
        "“Clean facilities, friendly staff, and the best lifting area in town. Highly recommend!”",
    },
    {
      image: CommunityImg3,
      name: "Emily R.",
      message:
        "“The yoga classes here are a game-changer. The coaches are so attentive, and the vibe is amazing!”",
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
