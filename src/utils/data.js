// images

import ResistanceImg from "../assets/img/workouts/resistance.png";
import BoxingImg from "../assets/img/workouts/boxing.png";
import BodyPumpImg from "../assets/img/workouts/body-pump.png";
import YogaImg from "../assets/img/workouts/yoga.png";
import FullBodyImg from "../assets/img/workouts/full-body.png";
import FitnessImg from "../assets/img/workouts/fitness.png";
import BattleRopeImg from "../assets/img/workouts/battle-rope.png";
import CommunityImg1 from "../assets/img/community/img1.png";
import CommunityImg2 from "../assets/img/community/img2.png";
import CommunityImg3 from "../assets/img/community/img3.png";
import CommunityImg4 from "../assets/img/community/img4.png";
import CommunityImg5 from "../assets/img/community/img5.jpg";
import CommunityImg6 from "../assets/img/community/img6.jpg";
import CommunityImg7 from "../assets/img/community/img7.jpg";

export const workouts = {
  programs: [
    {
      image: ResistanceImg,
      name: "Resistance",
    },
    {
      image: BoxingImg,
      name: "Boxing",
    },
    {
      image: BodyPumpImg,
      name: "Body Pump",
    },
    {
      image: YogaImg,
      name: "Yoga",
    },
    {
      image: FullBodyImg,
      name: "Full Body",
    },
    {
      image: FitnessImg,
      name: "Fitness",
    },
    {
      image: BattleRopeImg,
      name: "Battle Rope",
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
      name: "Mark A.",
      message:
        "“Great location, great price and great, helpful people. What to want more?”",
    },
    {
      image: CommunityImg2,
      name: "Lauren K.",
      message:
        "“Gym changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”",
    },
    {
      image: CommunityImg3,
      name: "Jhon D.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg4,
      name: "Anne R.",
      message:
        "“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”",
    },
    {
      image: CommunityImg5,
      name: "John Doe",
      message:
        "This gym is amazing! The trainers are fantastic, and the equipment is top-notch.",
    },
    {
      image: CommunityImg6,
      name: "Jane Smith",
      message:
        "I love the variety of classes offered here. Yoga and boxing are my favorites!",
    },
    {
      image: CommunityImg7,
      name: "Alex Johnson",
      message:
        "A perfect place to lift weights and stay fit. Highly recommend it!",
    },
  ],
};

export const faq = {
  accordions: [
    {
      question: "How can I book a workout class?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Can I pay by cash for my membership?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "What age do I need to be to join?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Are there any lockers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "How do I cancel my membership?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
    {
      question: "Is there water available at the gym?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.",
    },
  ],
};
