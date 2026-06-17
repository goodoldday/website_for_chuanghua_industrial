// src/components/FloatingActions.tsx

import { useState, useRef } from "react";
import {
  MessageCircleMore,
  Share2,
  Facebook,
  Linkedin,
  Mail,
  Link,
  MessageSquare,
} from "lucide-react";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  const url = window.location.href;
  const title = document.title;

  const share = {
    facebook: () =>
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        "_blank"
      ),

    linkedin: () =>
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`,
        "_blank"
      ),

    whatsapp: () =>
      window.open(
        `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
        "_blank"
      ),

    email: () => {
      window.location.href = `mailto:?subject=${encodeURIComponent(
        title
      )}&body=${encodeURIComponent(url)}`;
    },

    copy: async () => {
      await navigator.clipboard.writeText(url);
    },
  };

  return (
    <div className="fixed right-6 bottom-24 z-[9999] flex flex-col items-center gap-3">

      {/* CONTACT */}
      <button
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="
          w-14 h-14 rounded-full
          bg-[#0B2A4A]
          text-white
          shadow-lg
          hover:scale-110
          transition-transform duration-200 ease-out
          flex items-center justify-center
          will-change-transform
        "
      >
        <MessageCircleMore size={22} />
      </button>

      {/* SHARE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-14 h-14 rounded-full
          bg-white/90
          backdrop-blur-xl
          border border-white/20
          shadow-lg
          text-[#0B2A4A]
          hover:scale-110
          transition-transform duration-200 ease-out
          flex items-center justify-center
          will-change-transform
        "
      >
        <Share2 size={22} />
      </button>

      {/* SOCIAL STACK */}
      <div
        className={`
          flex flex-col gap-2
          transition-all duration-300 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}
        `}
      >
        <IconButton onClick={share.facebook}>
          <Facebook size={20} />
        </IconButton>

        <IconButton onClick={share.linkedin}>
          <Linkedin size={20} />
        </IconButton>

        <IconButton onClick={share.whatsapp}>
          <MessageSquare size={20} />
        </IconButton>

        <IconButton onClick={share.email}>
          <Mail size={20} />
        </IconButton>

        <IconButton onClick={share.copy}>
          <Link size={20} />
        </IconButton>
      </div>
    </div>
  );
}

/* -------------------------
   MAGNETIC BUTTON COMPONENT
-------------------------- */
function IconButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.08)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        w-12 h-12 rounded-full
        bg-white/90
        backdrop-blur-xl
        border border-gray-200
        shadow-md
        text-[#0B2A4A]
        flex items-center justify-center
        transition-transform duration-200 ease-out
        will-change-transform
      "
    >
      {children}
    </button>
  );
}