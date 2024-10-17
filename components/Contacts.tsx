"use client";
import { apiFetcher } from "@/utils/apiFetcher";
import useSWR from "swr";
import Section from "./Section";

interface IContact {
  github: string;
  mail: string;
  linkedin: string;
  phone: string;
}

interface ContactsProps {}

const Contacts: React.FC<ContactsProps> = () => {
  const { data, error } = useSWR<{ success: boolean; data: IContact }>(
    "/api/contact",
    apiFetcher
  );

  const isLoading = !data && !error;

  if (isLoading) {
    return (
      <div>
        <div className="bg-gray-200 h-8 w-40 mb-2 rounded-md"></div>
        <div className="animate-pulse">
          <div className="bg-gray-200 h-4 w-48 mb-2 rounded-md"></div>
          <div className="bg-gray-200 h-4 w-32 mb-2 rounded-md"></div>
          <div className="bg-gray-200 h-4 w-40 mb-2 rounded-md"></div>
          <div className="bg-gray-200 h-4 w-56 mb-2 rounded-md"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading contact information: {error.message}</div>;
  }

  const contact = data?.data;

  return (
    <div>
      <Section title="Contact" />
      <div className="flex flex-col gap-1">
        {contact?.mail && (
          <div className="text-black dark:text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1.5"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <a
              className="text-black dark:text-white"
              href={`mailto:${contact?.mail}`}
              rel="noreferrer"
            >
              {contact?.mail}
            </a>
          </div>
        )}

        {contact?.phone && (
          <div className="text-black dark:text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1.5"
            >
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            <a
              className="text-black dark:text-white"
              href={`tel:${contact?.phone}`}
              rel="noreferrer"
            >
              {contact?.phone}
            </a>
          </div>
        )}

        {contact?.github && (
          <div className="text-black dark:text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1.5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <a
              className="text-black dark:text-white"
              href={`https://github.com/${contact?.github}`}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{contact?.github}
            </a>
          </div>
        )}

        {contact?.linkedin && (
          <div className="text-black dark:text-white flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1.5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <a
              className="text-black dark:text-white"
              href={`https://linkedin.com/in/${contact?.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/{contact?.linkedin}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
