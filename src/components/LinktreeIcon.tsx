export default function LinktreeIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {/* trunk */}
            <path d="M12 22V10" />
            {/* top starburst */}
            <path d="M12 10L12 2M12 10L5.5 4.5M12 10L18.5 4.5" />
            {/* lower branches */}
            <path d="M12 16L4 12M12 16L20 12" />
        </svg>
    );
}
