export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-primary">
      <div className="flex-1 mx-auto bg-secondary w-2/3 p-[4rem] rounded-xl flex flex-col justify-start items-start">
        <h1 className="text-orange-500 font-bold text-6xl m-auto">
          SilverCare
        </h1>
        <Section>
          <SectionHeader>Introduction</SectionHeader>
          <SectionContent>
            In today&apos;s fast-paced world, where technology plays a
            significant role in enhancing our daily lives, the needs of the
            elderly population are often overlooked. As we age, remembering
            daily tasks and maintaining healthy habits can become challenging,
            affecting the overall quality of life. Recognizing this issue, the
            introduction of Silvercare aims to bridge the gap between technology
            and the elderly, offering a user-friendly digital solution tailored
            to their needs. Silvercare is not just an application; it&apos;s a
            companion designed to support the elderly in navigating their daily
            routines with ease and confidence.
          </SectionContent>
        </Section>
        <Section>
          <SectionHeader>The Problem</SectionHeader>
          <SectionContent>
            The problem facing many elderly individuals is the difficulty in
            keeping track of essential daily activities, such as medication
            intake, physical exercise, hydration, and appointments. This
            challenge is compounded by the fact that traditional methods of
            reminders, like written notes or relying on memory, are often
            ineffective or impractical. The cognitive changes that accompany
            aging can impair memory, making it harder to remember tasks without
            external cues. Additionally, the isolation felt by some elderly
            individuals can further exacerbate these challenges, as they may
            lack the support system to help them manage their daily lives. This
            gap in the ability to maintain independence and health poses a
            significant concern, highlighting the need for a solution that is
            both accessible and effective.
          </SectionContent>
        </Section>

        <Section>
          <SectionHeader>Our Solution</SectionHeader>
          <SectionContent>
            Our solution, Silvercare, is a digital checklist application
            specifically designed to address these challenges faced by the
            elderly. It serves as a personal assistant, offering reminders for
            daily tasks such as medication schedules, doctor&apos;s
            appointments, hydration, meals, and exercise, among others. The app
            is designed with simplicity in mind, featuring large text, intuitive
            navigation, and voice commands to accommodate varying levels of
            technological proficiency. Moreover, Silvercare incorporates
            personalized notifications and a user-friendly interface to ensure
            that users can easily interact with the app without feeling
            overwhelmed. By providing a reliable and accessible tool, Silvercare
            empowers the elderly to maintain their independence, stay on top of
            their health, and enjoy a better quality of life.
          </SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="my-8">{children}</section>;
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[#6E8D71] font-semibold text-4xl">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return <p className="text-xl mt-4 text-justify">{children}</p>;
}
