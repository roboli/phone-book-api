-- name: get_all
SELECT uid AS id, name, email FROM contacts

-- name: get_one
SELECT uid AS id, name, email, phone_work, phone_home, phone_mobile, phone_other, address FROM contacts WHERE uid = :id

-- name: insert_contact
INSERT INTO contacts (uid, name, email, phone_work, phone_home, phone_mobile, phone_other, address) VALUES :$contact

-- name: update_contact
UPDATE contacts SET :~fields WHERE uid = :id

-- name: remove_contact
DELETE FROM contacts WHERE uid = :id

-- name: remove_all
DELETE FROM contacts
