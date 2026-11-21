import Image from "next/image";

export interface Exec {
  name: string;
  pronouns?: string;
  role: string;
  imageUrl?: string;
  bio: string;
}

const card =
  "rounded-2xl border-2 border-text-primary bg-[var(--home-card)] shadow-[6px_6px_0_0_var(--color-primary)]";

export function ExecCard({ exec }: { exec: Exec }) {
  const initials = exec.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <li className={`${card} flex flex-col items-center gap-3 p-4 text-center md:p-5`}>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border-2 border-text-primary">
        {exec.imageUrl ? (
          <Image
            src={exec.imageUrl}
            alt={exec.name}
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 768px) 30vw, 45vw"
            className="object-cover object-[center_20%]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full w-full items-center justify-center bg-secondary/15 text-4xl font-extrabold text-text-muted"
          >
            {initials}
          </div>
        )}
      </div>
      <div>
        <h3 className="m-0 text-lg font-bold leading-tight">
          {exec.name}
          {exec.pronouns && (
            <span className="ml-1 block text-xs font-medium text-text-muted sm:inline">({exec.pronouns})</span>
          )}
        </h3>
        <p className="m-0 mt-1 text-xs font-bold uppercase tracking-wider text-[var(--home-eyebrow)]">{exec.role}</p>
      </div>
      <p className="m-0 text-xs leading-relaxed text-text-muted md:text-sm">Fun fact or hobby: {exec.bio}</p>
    </li>
  );
}
