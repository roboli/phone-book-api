-- name: get_all
SELECT uid AS id, name, email FROM contacts

-- name: insert_contact
INSERT INTO contacts (uid, name, email) VALUES :$contact

-- name: remove_contact
DELETE FROM contacts WHERE uid = :id

-- name: remove_all
DELETE FROM contacts
