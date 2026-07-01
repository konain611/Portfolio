import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
      <div className="w-full max-w-[97%] mx-auto py-4 flex flex-col gap-2">
        <div className="flex flex-col items-start border-l-4 border-(--border) py-2">
          <h1 className="text-left text-4xl font-bold uppercase ml-4">Projects</h1>
        </div>
  
        {/* <SkillsRadarChart />
     
           <div className="grid gap-4 lg:grid-cols-2 mb-10">
             <div className="rounded-2xl border border-(--border)/40 bg-(--surface)/50 p-4">
               <h2 className="mb-3 text-sm uppercase tracking-[0.35em] text-(--muted)">Skill areas</h2>
               <div className="grid gap-3 sm:grid-cols-2">
                 {skillGroups.map((group) => (
                   <div key={group.title} className="rounded-xl border border-(--border)/35 bg-background/50 p-3">
                     <h3 className="mb-2 text-sm font-semibold text-foreground">{group.title}</h3>
                     <div className="flex flex-wrap gap-2">
                       {group.items.map((item) => (
                         <span key={item} className="rounded-full border border-(--border)/40 px-2.5 py-1 text-xs text-(--muted)">
                           {item}
                         </span>
                       ))}
                     </div>
                   </div>
                 ))}
               </div>
             </div>
     
             <div className="rounded-2xl border border-(--border)/40 bg-(--surface)/50 p-4">
               <h2 className="mb-3 text-sm uppercase tracking-[0.35em] text-(--muted)">Expertise</h2>
               <div className="flex flex-wrap gap-2">
                 {expertise.map((item) => (
                   <span key={item} className="rounded-full border border-(--border)/40 px-2.5 py-1 text-xs text-(--muted)">
                     {item}
                   </span>
                 ))}
               </div>
     
               <div className="mt-4 rounded-xl border border-(--border)/35 bg-background/50 p-3">
                 <h3 className="mb-2 text-sm font-semibold text-foreground">Currently learning</h3>
                 <p className="text-sm text-(--foreground)">
                   DevOps practices, Docker, Kubernetes, infrastructure automation, and advanced AI agent development with RAG systems and LLM integration.
                 </p>
               </div>
             </div>
           </div>
      */}
        <Footer />
      </div>
  );
}
