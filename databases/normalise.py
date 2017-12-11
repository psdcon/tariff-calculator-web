import difflib
import json

import pandas as pd
import re

shapes = [' (Tuck)', ' (Pike)', ' (Straight)']


def check_shape(skill_name):
    for i, shape in enumerate(shapes):
        if shape in skill_name:
            return i
    return None


def strip_shape(skill_name, shape_index):
    strip_len = len(shapes[shape_index])
    return skill_name[:-strip_len]


# TODO
# fyp_skills are the most up to date, use those as base
# Rename level
# Lowercase the positions

# Add the json fig notation

# Match the ucdtc and bb skill names
# Find differences in description
# TODO

# Match the skills in the routines to skills in fyp_skills
fyp_skills = pd.read_csv("fyp_skills.csv")
# Rename level to cat
fyp_skills.rename(columns={'level': 'category'}, inplace=True)
# Lowercase positions
fyp_skills['start_position'] = fyp_skills['start_position'].str.lower()
fyp_skills['end_position'] = fyp_skills['end_position'].str.lower()
# Check positions
poss = ['feet', 'seat', 'back', 'front']
for i, skill_dst in fyp_skills.iterrows():
    if skill_dst['start_position'] not in poss or skill_dst['end_position'] not in poss:
        # print(skill['name'])
        # It finds nulls
        pass

json_skills = pd.read_json("new_tariff_skills.json")
json_skills.set_index('name', inplace=True)  # make the name of the skill the index
haystack = json_skills.index
for i, skill_dst in fyp_skills.iterrows():
    # check for match
    name_dst = skill_dst['name']
    name_src = difflib.get_close_matches(name_dst, haystack, 1)
    if name_src:
        name_src = name_src[0]
        # sanity check.
        if name_dst != name_src:
            # print(name_dst, '...', name_src)
            pass
        skill_src = json_skills.loc()[name_src]
        fyp_skills.set_value(i, 'fig_notation', skill_src['fig_notation'])  # skill_dst['fig_notation'] = skill_src['fig_notation']
        # print(skill_dst)
# print(json_skills.head())

# Get descriptions, vids, etc from bb skills

# match skills in routine
routines_old = pd.read_csv("tariff_routines.csv")
routines = []
for i, routine in routines_old.iterrows():
    routine_skill_names = [
        routine["skill1"],
        routine["skill2"],
        routine["skill3"],
        routine["skill4"],
        routine["skill5"],
        routine["skill6"],
        routine["skill7"],
        routine["skill8"],
        routine["skill9"],
        routine["skill10"]
    ]
    new_routine_skills = []
    for skill_name in routine_skill_names:
        shape_index = check_shape(skill_name)
        if shape_index is not None:
            skill_name = strip_shape(skill_name, shape_index)
        skill_name = difflib.get_close_matches(skill_name, haystack, 1)[0]
        skill = json_skills.loc()[skill_name]
        new_routine_skills.append([skill_name, shape_index])

    # Find year
    m = re.search("(?:(\d{4}) - )?(.+)", routine["name"])
    new_routine_year = m.group(1)
    new_routine_name = m.group(2)
    if new_routine_year is None:
        print("nvm")

    new_routine = {
        "level": routine["level"],
        "competition": routine["comp"],
        "year": new_routine_year,
        "name": new_routine_name,
        "skills": new_routine_skills
    }

    routines.append(new_routine)

# print(routines)
with open("new_routines.json", 'w') as f:
    json.dump(routines, f)


# print(fyp_skills['start_position'])
# print(fyp_skills['name'].tolist())
