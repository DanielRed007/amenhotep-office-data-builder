
CREATE TABLE buildings (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    nickname VARCHAR(255),
    floors TEXT[],
    status VARCHAR(255),
    type VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    country VARCHAR(255)
);

CREATE TABLE floors (
    id VARCHAR(255) PRIMARY KEY,
    building_id VARCHAR(255),
    floor_number INTEGER,
    floor_section VARCHAR(255),
    nickname VARCHAR(255),
    desks INTEGER,
    meeting_rooms INTEGER
);

select * from buildings b ;

INSERT INTO buildings (id, name, nickname, floors, status, type, address, city, country) VALUES
('1', 'Building One', 'First Tower', ARRAY['Floor 1', 'Floor 2'], 'Active', 'Office', '123 Main Street', 'Metropolis', 'United States'),
('2', 'Building Two', 'Second Plaza', ARRAY['Floor 1', 'Floor 2', 'Floor 3'], 'Inactive', 'Retail', '456 Elm Street', 'Smalltown', 'United States'),
('3', 'Building Three', 'Third Complex', ARRAY['Floor 1'], 'Active', 'Residential', '789 Oak Street', 'Villagio', 'Italy'),
('4', 'Building Four', 'Fourth Center', ARRAY['Floor 1', 'Floor 2'], 'Active', 'Office', '321 Cedar Street', 'Downtown', 'Canada'),
('5', 'Building Five', 'Fifth Mansion', ARRAY['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'], 'Inactive', 'Residential', '567 Pine Street', 'Hill Valley', 'United States'),
('6', 'Building Six', 'Sixth Hub', ARRAY['Floor 1', 'Floor 2'], 'Active', 'Office', '246 Birch Street', 'Midtown', 'United Kingdom'),
('7', 'Building Seven', 'Seventh Galleria', ARRAY['Floor 1', 'Floor 2', 'Floor 3'], 'Active', 'Retail', '135 Willow Street', 'Riverside', 'Australia'),
('8', 'Building Eight', 'Eighth Tower', ARRAY['Floor 1'], 'Inactive', 'Office', '654 Maple Street', 'Uptown', 'France'),
('9', 'Building Nine', 'Ninth Plaza', ARRAY['Floor 1', 'Floor 2', 'Floor 3', 'Floor 4'], 'Active', 'Retail', '987 Ash Street', 'Downtown', 'Spain'),
('10', 'Building Ten', 'Tenth Loft', ARRAY['Floor 1', 'Floor 2', 'Floor 3'], 'Active', 'Residential', '741 Oak Street', 'Hometown', 'Germany');

INSERT INTO floors (id, building_id, floor_number, floor_section, nickname, desks, meeting_rooms) 
VALUES
    -- Building 1
    ('1', '1', 1, 'Section A', 'Floor 1A', 20, 2),
    ('2', '1', 2, 'Section B', 'Floor 2B', 15, 1),
    ('3', '1', 3, 'Section C', 'Floor 3C', 25, 3),
    ('4', '1', 4, 'Section D', 'Floor 4D', 18, 2),
    ('5', '1', 5, 'Section E', 'Floor 5E', 22, 4),

    -- Building 2
    ('6', '2', 1, 'Section A', 'Floor 1A', 20, 2),
    ('7', '2', 2, 'Section B', 'Floor 2B', 15, 1),
    ('8', '2', 3, 'Section C', 'Floor 3C', 25, 3),
    ('9', '2', 4, 'Section D', 'Floor 4D', 18, 2),
    ('10', '2', 5, 'Section E', 'Floor 5E', 22, 4),

    -- ... (similar records for Building 3 to Building 10)
    -- Building 3
    ('11', '3', 1, 'Section A', 'Floor 1A', 20, 2),
    ('12', '3', 2, 'Section B', 'Floor 2B', 15, 1),
    ('13', '3', 3, 'Section C', 'Floor 3C', 25, 3),
    ('14', '3', 4, 'Section D', 'Floor 4D', 18, 2),
    ('15', '3', 5, 'Section E', 'Floor 5E', 22, 4);