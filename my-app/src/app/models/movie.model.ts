import {ResultsModel} from "./results.model";

export interface MovieModel{
  page: number;
  results: ResultsModel[];
  total_pages: number;
  total_results: number;
}
