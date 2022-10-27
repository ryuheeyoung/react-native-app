import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const atomColor = atom([]);

export const atomLikeColor = atomWithStorage("likeColor", "");
export const atomHateColor = atomWithStorage("hateColor", "");
