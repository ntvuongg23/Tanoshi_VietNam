import { useState, useRef, useEffect } from "react";
import { Share, Facebook, Twitter, Linkedin, Link2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

interface ShareOption {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  action: (url: string, title: string, description?: string) => void;
}

export default function ShareButton({ url, title, description, className = "" }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;

      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  const shareOptions: ShareOption[] = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:bg-blue-50 hover:text-blue-600",
      action: (url, title) => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(shareUrl, "_blank", "width=600,height=400");
      },
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:bg-sky-50 hover:text-sky-600",
      action: (url, title, description) => {
        const text = description ? `${title} - ${description}` : title;
        const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.open(shareUrl, "_blank", "width=600,height=400");
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:bg-blue-50 hover:text-blue-700",
      action: (url, title, description) => {
        const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        window.open(shareUrl, "_blank", "width=600,height=400");
      },
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
          setIsOpen(false);
        }, 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleShare = (option: ShareOption) => {
    option.action(url, title, description);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <Button
        ref={buttonRef}
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Share post"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Share className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in-0 zoom-in-95"
          role="menu"
          aria-label="Share options"
        >
          {shareOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.name}
                onClick={() => handleShare(option)}
                className={`w-full px-4 py-2 text-left flex items-center space-x-3 text-gray-700 transition-colors ${option.color}`}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleShare(option);
                  }
                }}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm font-medium">Share on {option.name}</span>
              </button>
            );
          })}
          
          <div className="border-t border-gray-100 my-1"></div>
          
          <button
            onClick={handleCopyLink}
            className="w-full px-4 py-2 text-left flex items-center space-x-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            role="menuitem"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCopyLink();
              }
            }}
          >
            {copySuccess ? (
              <>
                <Check className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-600">Link copied!</span>
              </>
            ) : (
              <>
                <Link2 className="h-4 w-4" />
                <span className="text-sm font-medium">Copy link</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
