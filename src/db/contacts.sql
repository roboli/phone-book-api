-- name: get_all
SELECT uid AS id, name, email FROM contacts

-- name: insert_contact
INSERT INTO contacts (uid, name, email) VALUES :$contact
