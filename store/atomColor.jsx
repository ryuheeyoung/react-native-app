import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

/**
 * 추천 컬러 변수 (viewmodel)
 */
const atomColor = atom([]);

/**
 * 좋아요 누른 컬러 변수 (model)
 */
const atomLikeColor = atomWithStorage("likeColor", []);

/**
 * 싫어요 누른 컬러 변수 (model)
 */
const atomHateColor = atomWithStorage("hateColor", []);

export { atomColor, atomLikeColor, atomHateColor };
