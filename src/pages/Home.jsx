import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "../components/Home/Posts";
import Hero from "../components/Home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Posts />
    </div>
  );
}
