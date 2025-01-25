"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BookingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Book Your Next Adventure</h1>
          <p className="text-xl text-gray-600">
            Explore our destinations and start planning your dream vacation
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Browse Destinations",
              description: "Explore our curated selection of amazing destinations",
              icon: MapPin,
              action: () => router.push("/destinations")
            },
            {
              title: "Check Availability",
              description: "Find the perfect dates for your trip",
              icon: Calendar,
              action: () => router.push("/destinations")
            },
            {
              title: "Group Bookings",
              description: "Special rates for group travelers",
              icon: Users,
              action: () => router.push("/contact")
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              onClick={item.action}
            >
              <item.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <Button>Learn More</Button>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Need help planning your trip? Our travel experts are here to assist you.
          </p>
          <Button variant="outline" asChild>
            <a href="/contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}