"use client"

import React from "react"
import Image from "next/image"
import NoResultIcon from "@/public/icons/no-result.svg"
import { useProjectFiltersState } from "@/state/useProjectFiltersState"

import ProjectCard from "./project-card"

const NoResults = () => {
  return (
    <div className="flex flex-col gap-2 pb-40 pt-24 text-center">
      <div className="mx-auto">
        <Image className="h-9 w-9" src={NoResultIcon} alt="no result icon" />
      </div>
      <span className="font-display text-2xl font-bold text-tuatara-950">
        No results found.
      </span>
      <span className="text-lg font-normal text-tuatara-950">
        {`Sorry, we couldn't find any results for your search. Please try again
        with different keywords.`}
      </span>
    </div>
  )
}

export default function ProjectList() {
  const { projects } = useProjectFiltersState((state) => state)

  const noItems = projects?.length === 0

  if (noItems) return <NoResults />

  return (
    <div className="flex flex-wrap justify-center gap-6 pb-6">
      {projects.map((project) => (
        <ProjectCard
          key={project?.id}
          project={project}
          showBanner
          showLinks
          border
        />
      ))}
    </div>
  )
}
