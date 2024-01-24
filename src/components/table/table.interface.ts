import { genderType, statusType } from "../../store/rick-and-morty-store/rick-and-morty.interface";

export interface HeadCell {
  id: string;
  label: string;
  sortable: boolean;
  filterable: boolean;
}

export const tableHeads = [
  {
    name: "image",
    label: "Image",
    sortable: false,
    filterable: false,
  },
  {
    name: "name",
    label: "Name",
    sortable: true,
    filterable: false,
  },
  {
    name: "origin",
    label: "Origin",
    sortable: true,
    filterable: false,
  },
  {
    name: "status",
    label: "Status",
    sortable: true,
    filterable: true,
  },
  {
    name: "species",
    label: "Species",
    sortable: true,
    filterable: false,
  },
  {
    name: "gender",
    label: "Gender",
    sortable: true,
    filterable: true,
  }
];

export interface IFilter {
  name: string;
  label: string;
  options: genderType[] | statusType[];
}

export const tableFilters: IFilter[] = [
  {
    name: "gender",
    label: "Gender",
    options: ["Male", "Female", "Genderless", "unknown"],
  },
  {
    name: "status",
    label: "Status",
    options: ["Alive", "Dead", "unknown"],
  }
];