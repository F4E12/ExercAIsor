"use client";

import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";
import ParticleBackground from "@/components/ui/particles";
import React from "react";

const SubscriptionPage = () => {
  return (
    <div className="">
      <ParticleBackground />
      <Navbar Page="subscription" />
      <div className="min-h-screen text-primary p-8 relative z-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-lg text-primary-foreground">
            Get started for free, or upgrade to Premium for unlimited features
            and more flexibility!
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="bg-primary-foreground shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">Free Plan</h2>
            <ul className="space-y-4 text-left text-secondary-foreground">
              <li>
                <span className="font-bold">Generate Variations: </span> Limited
                to 5 per day.
              </li>
              <li>
                <span className="font-bold">Customization: </span> Basic
                customization of variations.
              </li>
              <li>
                <span className="font-bold">Access: </span> Access to basic
                features only.
              </li>
              <li>
                <span className="font-bold">Support: </span> Community support.
              </li>
            </ul>
            <button className="mt-24 w-full bg-gray-300 text-gray-600 py-2 rounded-lg">
              Current Plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-primary-foreground shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Premium Plan
            </h2>
            <ul className="space-y-4 text-left text-secondary-foreground">
              <li>
                <span className="font-bold">Generate Variations: </span>{" "}
                Unlimited access to generate variations.
              </li>
              <li>
                <span className="font-bold">Customization: </span> Advanced
                customization options, including variation complexity and
                difficulty settings.
              </li>
              <li>
                <span className="font-bold">Access: </span> Access to all
                features, including advanced AI models.
              </li>
              <li>
                <span className="font-bold">Support: </span> Priority email and
                chat support.
              </li>
              <li>
                <span className="font-bold">Analytics: </span> Access to usage
                statistics and insights.
              </li>
            </ul>
            <button className="mt-8 w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-200">
              Upgrade to Premium
            </button>
          </div>
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Go Premium?</h2>
          <p className="text-lg text-primary-foreground mb-6">
            Upgrade to unlock the full potential of ExercAIsor and make the most
            out of your math practice experience!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-primary shadow-lg rounded-lg p-6 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-200">
              <h3 className="text-xl text-primary-foreground font-bold mb-4">
                Unlimited Variations
              </h3>
              <p className="text-secondary-foreground">
                No limits on the number of variations you can generate each day.
                Perfect for teachers and advanced learners.
              </p>
            </div>
            <div className="bg-secondary shadow-lg rounded-lg p-6 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-200">
              <h3 className="text-xl text-primary-foreground font-bold mb-4">
                Priority Support
              </h3>
              <p className="text-secondary-foreground">
                Get faster, priority access to our support team with Premium.
                We&apos;ll be there when you need us.
              </p>
            </div>
            <div className="bg-accent shadow-lg rounded-lg p-6 transition transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out animate-fade-in-up delay-200">
              <h3 className="text-xl text-primary-foreground font-bold mb-4">
                Advanced Customization
              </h3>
              <p className="text-secondary-foreground">
                Customize your variations with advanced settings, including
                difficulty levels and problem types.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubscriptionPage;
