"use client";

import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { WorkspaceAvatar } from "@/features/workspaces/components/workspace-avatar";

const WorkspaceSwitcher = () => {
    const { data: workspaces } = useGetWorkspaces();
    return (
        <div className="flex flex-col gap-y-2 mt-3">
            <div className="flex items-center justify-between">
                <p className="text-xs uppercase text-neutral-500">Workspaces</p>
                <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
            </div>
            <Select>
                <SelectTrigger className="w-full bg-neutral-200 font-medium p-1">
                    <SelectValue placeholder="No workspace selected" />
                    <SelectContent>
                        {workspaces?.documents.map((workspace) => (
                            <SelectItem key={workspace.$id} value={workspace.$id}>
                                <div className="flex justify-start items-center gap-3 font-medium">
                                    <WorkspaceAvatar name={workspace.name} image={workspace.imageUrl} />
                                    <span className="truncate">{workspace.name}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </SelectTrigger>
            </Select>
        </div>
    );
};

export default WorkspaceSwitcher;
