import json

with open('new_routines.json', 'r') as f:
    routines = json.load(f)

new_routines = []
for routine in routines:
    skills = []
    shapes = []
    skills_and_shapes = routine['skills']
    for skill_and_shape in skills_and_shapes:
        skills.append(skill_and_shape[0])
        shapes.append(skill_and_shape[1])

    routine['skills'] = skills
    routine['shapes'] = shapes
    new_routines.append(routine)

print(new_routines)

with open('new_routines.json', 'w') as f:
    json.dump(new_routines, f)