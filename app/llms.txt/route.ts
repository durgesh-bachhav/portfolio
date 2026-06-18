import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Durgesh Bachhav - Full Stack MERN Developer

> Full Stack MERN Developer with 2+ years of experience building scalable SaaS, FinTech, E-commerce, Enterprise, and Web3 applications using TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, and Redis.

## About

Durgesh Bachhav is a Full Stack MERN Developer based in Nashik, India, specializing in building production-grade applications with modern web technologies. With over 2 years of professional experience, he has delivered scalable solutions across SaaS, FinTech, E-commerce, Enterprise, and Web3 domains.

## Core Expertise

### Frontend
- React.js, Next.js, TypeScript, JavaScript (ES6+)
- Redux Toolkit, Zustand, React Query
- Tailwind CSS, Shadcn UI, Material UI

### Backend
- Node.js, Express.js, AdonisJS
- REST APIs, Authentication, RBAC, Webhooks
- Queue Systems, Event-Driven Architecture

### Databases
- MongoDB, MySQL, PostgreSQL, Redis
- Sequelize, Mongoose

### Cloud & DevOps
- Docker, PM2, VPS Deployment
- AWS S3, AWS EC2, Nginx, Cloudinary, CI/CD

### Blockchain & Web3
- Web3, Ethers.js, MoonPay, Transak, Razorpay

## Professional Experience

### Rwaltz Software (Mar 2025 - Present)
Full Stack Software Developer building scalable applications with React.js, Node.js, Express.js, AdonisJS, MongoDB, MySQL, and Redis. Led development of Bajaj Distributor Panel enterprise platform.

### Sinss Digital (Mar 2024 - Mar 2025)
Full Stack Software Developer building e-commerce applications with React.js and Redux. Delivered 7+ production-ready business websites.

## Notable Projects

### Bajaj Electricals
End-to-end distributor management platform with scalable REST APIs, authentication, RBAC, and admin dashboards.

### Web3 Arc Defi
Crypto transaction platform with MoonPay and Transak payment integration, secure webhooks, and real-time processing.

### Cursify
Open-source React cursor animation library with reusable components and smooth animations.

## Contact

- Email: durgesh.devwork@gmail.com
- Phone: +91 9607541611
- Location: Nashik, Maharashtra, India
- Portfolio: https://durgeshbachhav.vercel.app
- GitHub: https://github.com/durgeshbachhav
- LinkedIn: https://www.linkedin.com/in/durgesh-bachhav-914bb8337/

## Blog

Technical guides and tutorials on React, Next.js, Node.js, MongoDB, Redis, TypeScript, and modern web development.

Available at: https://durgeshbachhav.vercel.app/blog

## Optional

For more detailed information about projects and experience, visit the portfolio website.`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
