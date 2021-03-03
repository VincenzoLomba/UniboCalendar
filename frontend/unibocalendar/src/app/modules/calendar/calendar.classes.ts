export class Course {

    public nickName: string;
    public year: number;
    public curricula: string | null;
    public lastOpeningData: Date;

    equals(course: Course): boolean {
        return this.nickName === course.nickName
            && this.year === course.year
            && this.curricula === course.curricula
        ;
    }

    compareTo(course: Course): number { return this.lastOpeningData < course.lastOpeningData ? -1 : +1; }
}

export function cleanAndSortCourses(availableCourses: Course[]): Course[] {
    if (availableCourses == null || availableCourses.length === 0) { return null; }
    return availableCourses.filter((course: Course, index: number) => {
      let someIndex = -1;
      const match: boolean = availableCourses.some((someCourse: Course) => {
        ++someIndex;
        return course.equals(someCourse) && someIndex !== index;
      });
      return !match || course.lastOpeningData > availableCourses[someIndex].lastOpeningData;
    }).sort((c1: Course, c2: Course) => c1.compareTo(c2));
}
