const treatmentData = {
    "Abrasions": {
        rank: "Paramedic",
        treatment: "Gauze/Comp Bandadge",
        stitching: false,
        notes: "None"
    },
    "Avulsions": {
        rank: "Paramedic",
        treatment: "Gauze/Comp Bandadge",
        stitching: true,
        notes: "None"
    },
    "Contusions": {
        rank: "Paramedic",
        treatment: "Gauze/Comp Bandadge",
        stitching: false,
        notes: "None"
    },
    "Crush": {
        rank: "Paramedic",
        treatment: "Gauze/Comp Bandadge",
        stitching: true,
        notes: "None"
    },
    "Cuts": {
        rank: "Paramedic",
        treatment: "Gauze/Comp Bandadge",
        stitching: false,
        notes: "None"
    },
    "Lacerations": {
        rank: "Paramedic",
        treatment: "Bandages / TQ",
        stitching: true,
        notes: "None"
    },
    "Velocity Wounds": {
        rank: "Paramedic",
        treatment: "Bandages",
        stitching: true,
        notes: "None"
    },
    "Puncture Wounds": {
        rank: "Paramedic",
        treatment: "Gauze / Hemo Gauze",
        stitching: true,
        notes: "None"
    },
    "Burns": {
        rank: "Paramedic",
        treatment: "Saline Soaked Gauze",
        stitching: false,
        notes: "None"
    },
    "Partial Airway Blockages": {
        rank: "Paramedic",
        treatment: "Portable Suction",
        stitching: false,
        notes: "None"
    },
    "Broken Necks": {
        rank: "Paramedic",
        treatment: "C-Collar",
        stitching: false,
        notes: "None"
    },
    "Heart Attacks": {
        rank: "Paramedic",
        treatment: "Asprin",
        stitching: false,
        notes: "None"
    },
    "Asthma Attacks": {
        rank: "Paramedic",
        treatment: "Salbutamol Nasal",
        stitching: false,
        notes: "None"
    },
    "Hypoglycemia": {
        rank: "Paramedic",
        treatment: "Glucose Oral",
        stitching: false,
        notes: "None"
    },
    "Taser Prongs": {
        rank: "Paramedic",
        treatment: "Prongs",
        stitching: false,
        notes: "None"
    },
    "Overdoses": {
        rank: "Paramedic",
        treatment: "Naloxone Nasal",
        stitching: false,
        notes: "None"
    },
    "Water in lungs": {
        rank: "Paramedic",
        treatment: "Portable Suction",
        stitching: false,
        notes: "None"
    },
    "Anaphylaxis": {
        rank: "Paramedic",
        treatment: "Epinephrine",
        stitching: false,
        notes: "None"
    },
    "Hypothermia": {
        rank: "Paramedic",
        treatment: "Blanket",
        stitching: false,
        notes: "None"
    },
    "Seizures": {
        rank: "Paramedic",
        treatment: "Diazepam",
        stitching: false,
        notes: "None"
    },
    "Impalment": {
        rank: "Student",
        treatment: "Gauze / Celox Gauze",
        stitching: true,
        notes: "None"
    },
    "Low BP": {
        rank: "Advanced Paramedic",
        treatment: "Atropine, Adrenalin OR Nitroglycerin",
        stitching: false,
        notes: "If BP is >30 // <80 use: Nitroglycerin If other, Adrenalin or Atropine"
    },
    "Cardiac Arrest": {
        rank: "Advanced Paramedic",
        treatment: "Defib - 3 A's",
        stitching: false,
        notes: "2 Rounds of CPR, Attempt Defib. 3 A's - Adrenalin Atropine Amiodarone"
    },
    "Broken Limbs": {
        rank: "Advanced Paramedic",
        treatment: "Box Splint",
        stitching: false,
        notes: "None"
    },
    "Chest Infection": {
        rank: "Advanced Paramedic",
        treatment: "Amoxicillin",
        stitching: false,
        notes: "None"
    },
    "Closed Fractures": {
        rank: "Advanced Paramedic",
        treatment: "Box Splint",
        stitching: false,
        notes: "None"
    },
    "Broken Pelvis": {
        rank: "HEMS",
        treatment: "Pelvic Binder",
        stitching: false,
        notes: "Make sure Oxygen is on and adequate pain relief (Ketamine)"
    },
    "Punctured Lung": {
        rank: "HEMS",
        treatment: "Needle Decompression",
        stitching: false,
        notes: "Make sure Oxygen is on and adequate pain relief (Ketamine)"
    },
    "Blocked Airway": {
        rank: "HEMS",
        treatment: "Emergency Surgical Airway",
        stitching: false,
        notes: "Make sure Oxygen is on and adequate pain relief (Ketamine)"
    },
    "Open Fractures": {
        rank: "HEMS",
        treatment: "Fracture Reset",
        stitching: false,
        notes: "Make sure Oxygen is on and adequate pain relief (Ketamine)"
    },
    "Electrocution": {
        rank: "HEMS",
        treatment: "DEFIB",
        stitching: false,
        notes: "Sedation"
    },
    "Cardiac Rythm Disease": {
        rank: "HEMS",
        treatment: "Defib",
        stitching: false,
        notes: "Sedation"
    },
    "Mid Femure Fracture": {
        rank: "HEMS",
        treatment: "Kendrick Splint",
        stitching: false,
        notes: "None"
    },
    "Degloved Wound": {
        rank: "HEMS",
        treatment: "Gauze",
        stitching: true,
        notes: "None"
    },
    "Internal Bleeding": {
        rank: "HEMS",
        treatment: "TXA",
        stitching: false,
        notes: "None"
    },
    "TBI's": {
        rank: "HEMS",
        treatment: "Mannitol",
        stitching: false,
        notes: "None"
    },
    "Abdominal Aneurism": {
        rank: "Hems Dr",
        treatment: "Manage obs and transport",
        stitching: false,
        notes: "None"
    },
    "Hemothorax": {
        rank: "Hems Dr",
        treatment: "Thorocostomy",
        stitching: false,
        notes: "None"
    },
    "Tension Pneumothorax": {
        rank: "Hems Dr",
        treatment: "Thorocostomy",
        stitching: false,
        notes: "None"
    },
    "Diabetic Ketoacidosis": {
        rank: "Hems Dr",
        treatment: "Insulin",
        stitching: false,
        notes: "None"
    },
    "Open Fracture / No Circulation": {
        rank: "Hems Dr",
        treatment: "Amputation",
        stitching: false,
        notes: "Ensure they are Sedated"
    },
    "Compartment Syndrom": {
        rank: "Hems Dr",
        treatment: "Relieve Muscle Pressure",
        stitching: false,
        notes: "Make sure Oxygen is on and adequate pain relief (Ketamine)"
    },
    "Loss of Circulation": {
        rank: "Hems Dr",
        treatment: "Amputation",
        stitching: false,
        notes: "Ensure they are Sedated"
    },
    "Blunt Chest Trauma": {
        rank: "Hems Dr",
        treatment: "Thorocotomy",
        stitching: false,
        notes: "None"
    },
    "Dislocation": {
        rank: "Hems Dr",
        treatment: "Fracture Reset",
        stitching: false,
        notes: "Adequate Pain Relief"
    },
    "Cardiac Tamponade": {
        rank: "Hems Dr",
        treatment: "Thorocotomy",
        stitching: false,
        notes: "Ensure they are Sedated"
    },
    "SCW": {
        rank: "HART",
        treatment: "Russel Chest Seal",
        stitching: false,
        notes: "None"
    },
    "Poisoning": {
        rank: "SORT",
        treatment: "Methylene Blue",
        stitching: false,
        notes: "None"
    }
};
