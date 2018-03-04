import editdistance
import json
import csv
from pathlib import Path

# routines = Path('C:\\Users\\psdco\\Documents\\Web\\tariff-cra\\src\\data\\databases\\tariff_routines.csv')
new_routines_Path = Path('C:\\Users\\psdco\\Documents\\Web\\tariff-cra\\src\\data\\databases\\new_routines.json')
skills_Path = Path('C:\\Users\\psdco\\Documents\\Web\\tariff-cra\\src\\data\\databases\\new_tariff_skills.json')

with open(new_routines_Path, 'r') as f:
    new_routines = json.load(f)

with open(skills_Path, 'r') as f:
    skills = json.load(f)


def find_nearest_skills(routine_skill):
    edit_distances = []
    for skill in skills:
        dist = editdistance.eval(skill['name'], routine_skill)
        edit_distances.append([skill['name'], dist])
        # if dist == 0:
        #     break
    sorted_dists = sorted(edit_distances, key=lambda x: x[1])
    return sorted_dists


for routine in new_routines:
    for r_skill in routine['skills']:
        edit_distances = find_nearest_skills(r_skill[0])
        if edit_distances[0][1] != 0:
            print(r_skill[0], edit_distances)