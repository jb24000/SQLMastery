
const TRACKS = {
  "core": [
    {
      "title": "Day 1: Setup & Quickstart",
      "items": [
        {
          "label": "Install Postgres & psql",
          "badge": "\ud83d\udd27 Setup",
          "time": "Morning (30m)",
          "details": "Install locally or via Docker; connect with psql; create sample DB.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Install locally or via Docker; connect with psql; create sample DB.",
          "do": "Hands\u2011on: Install locally or via Docker; connect with psql; create sample DB.",
          "aws": "Use RDS/Aurora endpoints with psql; configure parameter & subnet groups."
        },
        {
          "label": "SELECT 101",
          "badge": "\ud83d\udcc4 Query",
          "time": "Evening (30m)",
          "details": "SELECT, WHERE, ORDER BY, LIMIT; NULL semantics.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: SELECT, WHERE, ORDER BY, LIMIT; NULL semantics.",
          "do": "Hands\u2011on: SELECT, WHERE, ORDER BY, LIMIT; NULL semantics.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Install Postgres & psql and SELECT 101; validated via hands\u2011on tasks. Applied in AWS: Use RDS/Aurora endpoints with psql; configure parameter & subnet groups."
    },
    {
      "title": "Day 2: Types & Casting",
      "items": [
        {
          "label": "Data types overview",
          "badge": "\ud83d\udd24 Types",
          "time": "Morning (30m)",
          "details": "text, numeric, boolean, date/time; implicit/explicit casts.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: text, numeric, boolean, date/time; implicit/explicit casts.",
          "do": "Hands\u2011on: text, numeric, boolean, date/time; implicit/explicit casts.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        },
        {
          "label": "Expressions & operators",
          "badge": "\u2795 Expr",
          "time": "Evening (30m)",
          "details": "COALESCE, NULLIF, CONCAT, arithmetic, LIKE/ILIKE.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: COALESCE, NULLIF, CONCAT, arithmetic, LIKE/ILIKE.",
          "do": "Hands\u2011on: COALESCE, NULLIF, CONCAT, arithmetic, LIKE/ILIKE.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Data types overview and Expressions & operators; validated via hands\u2011on tasks. Applied in AWS: Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
    },
    {
      "title": "Day 3: Joins I",
      "items": [
        {
          "label": "INNER & LEFT JOIN",
          "badge": "\ud83d\udd17 Join",
          "time": "Morning (30m)",
          "details": "Two-table joins; join conditions vs filters.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Two-table joins; join conditions vs filters.",
          "do": "Hands\u2011on: Two-table joins; join conditions vs filters.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        },
        {
          "label": "Multi-join patterns",
          "badge": "\u2795 Multi",
          "time": "Evening (30m)",
          "details": "Joining 3+ tables; aliasing and readability.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Joining 3+ tables; aliasing and readability.",
          "do": "Hands\u2011on: Joining 3+ tables; aliasing and readability.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: INNER & LEFT JOIN and Multi-join patterns; validated via hands\u2011on tasks. Applied in AWS: Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
    },
    {
      "title": "Day 4: Joins II",
      "items": [
        {
          "label": "RIGHT/FULL/CROSS",
          "badge": "\ud83e\udde9 Join",
          "time": "Morning (30m)",
          "details": "Edge join types and when to use them.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Edge join types and when to use them.",
          "do": "Hands\u2011on: Edge join types and when to use them.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Anti/semi joins",
          "badge": "\ud83d\udeab\u2705 Semi",
          "time": "Evening (30m)",
          "details": "NOT EXISTS, EXISTS, DISTINCT ON.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: NOT EXISTS, EXISTS, DISTINCT ON.",
          "do": "Hands\u2011on: NOT EXISTS, EXISTS, DISTINCT ON.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: RIGHT/FULL/CROSS and Anti/semi joins; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 5: Aggregations",
      "items": [
        {
          "label": "GROUP BY & HAVING",
          "badge": "\u2211 Aggregate",
          "time": "Morning (30m)",
          "details": "Aggregate functions; HAVING vs WHERE.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Aggregate functions; HAVING vs WHERE.",
          "do": "Hands\u2011on: Aggregate functions; HAVING vs WHERE.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        },
        {
          "label": "Grouping sets (opt)",
          "badge": "\ud83e\uddee Advanced",
          "time": "Evening (30m)",
          "details": "ROLLUP, CUBE, GROUPING SETS basics.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: ROLLUP, CUBE, GROUPING SETS basics.",
          "do": "Hands\u2011on: ROLLUP, CUBE, GROUPING SETS basics.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: GROUP BY & HAVING and Grouping sets (opt); validated via hands\u2011on tasks. Applied in AWS: Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
    },
    {
      "title": "Day 6: Subqueries & CTEs I",
      "items": [
        {
          "label": "Subqueries & IN/EXISTS",
          "badge": "\ud83d\udd0e Subq",
          "time": "Morning (30m)",
          "details": "Correlated vs uncorrelated.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Correlated vs uncorrelated.",
          "do": "Hands\u2011on: Correlated vs uncorrelated.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        },
        {
          "label": "CTEs (WITH)",
          "badge": "\ud83e\uddf1 CTE",
          "time": "Evening (30m)",
          "details": "Readable pipelines; reuse intermediate results.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Readable pipelines; reuse intermediate results.",
          "do": "Hands\u2011on: Readable pipelines; reuse intermediate results.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: Subqueries & IN/EXISTS and CTEs (WITH); validated via hands\u2011on tasks. Applied in AWS: Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
    },
    {
      "title": "Day 7: CTEs II (Recursive)",
      "items": [
        {
          "label": "Recursive queries",
          "badge": "\ud83e\uddd7 Recursion",
          "time": "Morning (45m)",
          "details": "Hierarchy/path queries (parent/child).",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Hierarchy/path queries (parent/child).",
          "do": "Hands\u2011on: Hierarchy/path queries (parent/child).",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Cycle detection",
          "badge": "\ud83d\udd01 Cycles",
          "time": "Evening (30m)",
          "details": "WITH RECURSIVE + cycle guards.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: WITH RECURSIVE + cycle guards.",
          "do": "Hands\u2011on: WITH RECURSIVE + cycle guards.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Recursive queries and Cycle detection; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 8: Windows I",
      "items": [
        {
          "label": "OVER/PARTITION/ORDER",
          "badge": "\ud83e\ude9f Window",
          "time": "Morning (30m)",
          "details": "ROW_NUMBER, RANK, DENSE_RANK.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: ROW_NUMBER, RANK, DENSE_RANK.",
          "do": "Hands\u2011on: ROW_NUMBER, RANK, DENSE_RANK.",
          "aws": "Use table partitioning and Redshift dist/sort keys; external tables over S3."
        },
        {
          "label": "Running totals",
          "badge": "\ud83d\udcc8 Running",
          "time": "Evening (30m)",
          "details": "SUM(...) OVER order-based windows.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: SUM(...) OVER order-based windows.",
          "do": "Hands\u2011on: SUM(...) OVER order-based windows.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: OVER/PARTITION/ORDER and Running totals; validated via hands\u2011on tasks. Applied in AWS: Use table partitioning and Redshift dist/sort keys; external tables over S3."
    },
    {
      "title": "Day 9: Windows II",
      "items": [
        {
          "label": "LAG/LEAD",
          "badge": "\u23ee\u23ed Offsets",
          "time": "Morning (30m)",
          "details": "Period-over-period deltas; comparisons.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Period-over-period deltas; comparisons.",
          "do": "Hands\u2011on: Period-over-period deltas; comparisons.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Frames & bounds",
          "badge": "\ud83d\udccf Frames",
          "time": "Evening (30m)",
          "details": "RANGE vs ROWS; inclusive/exclusive bounds.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: RANGE vs ROWS; inclusive/exclusive bounds.",
          "do": "Hands\u2011on: RANGE vs ROWS; inclusive/exclusive bounds.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: LAG/LEAD and Frames & bounds; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 10: DDL Basics",
      "items": [
        {
          "label": "CREATE TABLE",
          "badge": "\ud83d\udcd0 DDL",
          "time": "Morning (30m)",
          "details": "Columns, defaults, check constraints.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Columns, defaults, check constraints.",
          "do": "Hands\u2011on: Columns, defaults, check constraints.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Keys & constraints",
          "badge": "\ud83d\udd11 Integrity",
          "time": "Evening (30m)",
          "details": "PK, FK, UNIQUE, NOT NULL.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: PK, FK, UNIQUE, NOT NULL.",
          "do": "Hands\u2011on: PK, FK, UNIQUE, NOT NULL.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: CREATE TABLE and Keys & constraints; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 11: Normalization",
      "items": [
        {
          "label": "From ERD to tables",
          "badge": "\ud83e\udded Model",
          "time": "Morning (45m)",
          "details": "1NF\u20133NF; avoid anomalies.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: 1NF\u20133NF; avoid anomalies.",
          "do": "Hands\u2011on: 1NF\u20133NF; avoid anomalies.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Denormalization tradeoffs",
          "badge": "\u2696\ufe0f Design",
          "time": "Evening (30m)",
          "details": "Read vs write performance; reporting needs.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Read vs write performance; reporting needs.",
          "do": "Hands\u2011on: Read vs write performance; reporting needs.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: From ERD to tables and Denormalization tradeoffs; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 12: DML & Transactions I",
      "items": [
        {
          "label": "INSERT/UPDATE/DELETE",
          "badge": "\u270d\ufe0f DML",
          "time": "Morning (30m)",
          "details": "Row manipulation and safe patterns.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Row manipulation and safe patterns.",
          "do": "Hands\u2011on: Row manipulation and safe patterns.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Transactions & ACID",
          "badge": "\ud83e\uddea ACID",
          "time": "Evening (30m)",
          "details": "BEGIN/COMMIT/ROLLBACK; SAVEPOINT.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: BEGIN/COMMIT/ROLLBACK; SAVEPOINT.",
          "do": "Hands\u2011on: BEGIN/COMMIT/ROLLBACK; SAVEPOINT.",
          "aws": "Tune RDS/Aurora for OLTP; understand writer/reader behavior in Aurora."
        }
      ],
      "resume": "Delivered: INSERT/UPDATE/DELETE and Transactions & ACID; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 13: Isolation & Concurrency",
      "items": [
        {
          "label": "Isolation levels",
          "badge": "\ud83e\uddf1 Isolation",
          "time": "Morning (30m)",
          "details": "Read committed, repeatable read, serializable.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            },
            {
              "label": "MVCC",
              "href": "https://www.postgresql.org/docs/current/mvcc-intro.html"
            }
          ],
          "learn": "Concepts: Read committed, repeatable read, serializable.",
          "do": "Hands\u2011on: Read committed, repeatable read, serializable.",
          "aws": "Tune RDS/Aurora for OLTP; understand writer/reader behavior in Aurora."
        },
        {
          "label": "Locking & deadlocks",
          "badge": "\ud83d\udd12 Locks",
          "time": "Evening (30m)",
          "details": "Row/table locks; detection & avoidance.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Row/table locks; detection & avoidance.",
          "do": "Hands\u2011on: Row/table locks; detection & avoidance.",
          "aws": "Tune RDS/Aurora for OLTP; understand writer/reader behavior in Aurora."
        }
      ],
      "resume": "Delivered: Isolation levels and Locking & deadlocks; validated via hands\u2011on tasks. Applied in AWS: Tune RDS/Aurora for OLTP; understand writer/reader behavior in Aurora."
    },
    {
      "title": "Day 14: Indexes I",
      "items": [
        {
          "label": "B-tree indexes",
          "badge": "\ud83c\udf33 Index",
          "time": "Morning (30m)",
          "details": "Create/when/scan types; selectivity.",
          "links": [
            {
              "label": "Postgres Indexes",
              "href": "https://www.postgresql.org/docs/current/indexes.html"
            }
          ],
          "learn": "Concepts: Create/when/scan types; selectivity.",
          "do": "Hands\u2011on: Create/when/scan types; selectivity.",
          "aws": "Right-size indexes on RDS; interpret plans; monitor with Performance Insights."
        },
        {
          "label": "EXPLAIN plans",
          "badge": "\ud83d\uddfa\ufe0f Plan",
          "time": "Evening (30m)",
          "details": "Read EXPLAIN; estimate vs actual.",
          "links": [
            {
              "label": "Postgres EXPLAIN",
              "href": "https://www.postgresql.org/docs/current/using-explain.html"
            }
          ],
          "learn": "Concepts: Read EXPLAIN; estimate vs actual.",
          "do": "Hands\u2011on: Read EXPLAIN; estimate vs actual.",
          "aws": "Right-size indexes on RDS; interpret plans; monitor with Performance Insights."
        }
      ],
      "resume": "Delivered: B-tree indexes and EXPLAIN plans; validated via hands\u2011on tasks. Applied in AWS: Right-size indexes on RDS; interpret plans; monitor with Performance Insights."
    },
    {
      "title": "Day 15: Indexes II",
      "items": [
        {
          "label": "Composite/partial/covering",
          "badge": "\ud83e\udde9 Advanced",
          "time": "Morning (30m)",
          "details": "Multi-column, WHERE partial, INCLUDE.",
          "links": [
            {
              "label": "Postgres Indexes",
              "href": "https://www.postgresql.org/docs/current/indexes.html"
            }
          ],
          "learn": "Concepts: Multi-column, WHERE partial, INCLUDE.",
          "do": "Hands\u2011on: Multi-column, WHERE partial, INCLUDE.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Maintenance",
          "badge": "\ud83e\uddfd Maintain",
          "time": "Evening (30m)",
          "details": "Reindex, analyze, statistics.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Reindex, analyze, statistics.",
          "do": "Hands\u2011on: Reindex, analyze, statistics.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Composite/partial/covering and Maintenance; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 16: Views & MVs",
      "items": [
        {
          "label": "Views",
          "badge": "\ud83d\udc53 Views",
          "time": "Morning (30m)",
          "details": "Encapsulate complexity; permissions.",
          "links": [
            {
              "label": "Views",
              "href": "https://www.postgresql.org/docs/current/sql-createview.html"
            }
          ],
          "learn": "Concepts: Encapsulate complexity; permissions.",
          "do": "Hands\u2011on: Encapsulate complexity; permissions.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        },
        {
          "label": "Materialized views",
          "badge": "\ud83d\udce6 MVs",
          "time": "Evening (30m)",
          "details": "REFRESH strategies; incremental patterns.",
          "links": [
            {
              "label": "Materialized Views",
              "href": "https://www.postgresql.org/docs/current/sql-creatematerializedview.html"
            }
          ],
          "learn": "Concepts: REFRESH strategies; incremental patterns.",
          "do": "Hands\u2011on: REFRESH strategies; incremental patterns.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: Views and Materialized views; validated via hands\u2011on tasks. Applied in AWS: Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
    },
    {
      "title": "Day 17: Data Load & Export",
      "items": [
        {
          "label": "COPY / \\copy",
          "badge": "\u2b07\ufe0f Load",
          "time": "Morning (30m)",
          "details": "Fast bulk load; CSV/TSV.",
          "links": [
            {
              "label": "COPY",
              "href": "https://www.postgresql.org/docs/current/sql-copy.html"
            }
          ],
          "learn": "Concepts: Fast bulk load; CSV/TSV.",
          "do": "Hands\u2011on: Fast bulk load; CSV/TSV.",
          "aws": "Bulk ingest to RDS or Redshift COPY from S3; Glue for pipelines."
        },
        {
          "label": "Export safely",
          "badge": "\u2b06\ufe0f Export",
          "time": "Evening (30m)",
          "details": "Formatting, quoting, nulls.",
          "links": [
            {
              "label": "COPY",
              "href": "https://www.postgresql.org/docs/current/sql-copy.html"
            }
          ],
          "learn": "Concepts: Formatting, quoting, nulls.",
          "do": "Hands\u2011on: Formatting, quoting, nulls.",
          "aws": "Bulk ingest to RDS or Redshift COPY from S3; Glue for pipelines."
        }
      ],
      "resume": "Delivered: COPY / \\copy and Export safely; validated via hands\u2011on tasks. Applied in AWS: Bulk ingest to RDS or Redshift COPY from S3; Glue for pipelines."
    },
    {
      "title": "Day 18: JSON & Semi\u2011Structured",
      "items": [
        {
          "label": "json/jsonb fields",
          "badge": "\ud83d\udce6 JSON",
          "time": "Morning (30m)",
          "details": "Operators ->, ->>, @>; GIN indexes.",
          "links": [
            {
              "label": "JSON/JSONB",
              "href": "https://www.postgresql.org/docs/current/functions-json.html"
            }
          ],
          "learn": "Concepts: Operators ->, ->>, @>; GIN indexes.",
          "do": "Hands\u2011on: Operators ->, ->>, @>; GIN indexes.",
          "aws": "Store semi\u2011structured data in jsonb on RDS or S3 + Athena/Redshift Spectrum."
        },
        {
          "label": "Hybrid models",
          "badge": "\ud83e\uddec Hybrid",
          "time": "Evening (30m)",
          "details": "Relational + JSON tradeoffs.",
          "links": [
            {
              "label": "JSON/JSONB",
              "href": "https://www.postgresql.org/docs/current/functions-json.html"
            }
          ],
          "learn": "Concepts: Relational + JSON tradeoffs.",
          "do": "Hands\u2011on: Relational + JSON tradeoffs.",
          "aws": "Store semi\u2011structured data in jsonb on RDS or S3 + Athena/Redshift Spectrum."
        }
      ],
      "resume": "Delivered: json/jsonb fields and Hybrid models; validated via hands\u2011on tasks. Applied in AWS: Store semi\u2011structured data in jsonb on RDS or S3 + Athena/Redshift Spectrum."
    },
    {
      "title": "Day 19: Time & Date Mastery",
      "items": [
        {
          "label": "Time zones & intervals",
          "badge": "\u23f1\ufe0f Time",
          "time": "Morning (30m)",
          "details": "AT TIME ZONE; interval math.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: AT TIME ZONE; interval math.",
          "do": "Hands\u2011on: AT TIME ZONE; interval math.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Temporal analytics",
          "badge": "\ud83d\udcc6 Trends",
          "time": "Evening (30m)",
          "details": "Cohort & windowed time queries.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Cohort & windowed time queries.",
          "do": "Hands\u2011on: Cohort & windowed time queries.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Time zones & intervals and Temporal analytics; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 20: Security Basics",
      "items": [
        {
          "label": "Roles & grants",
          "badge": "\ud83d\udee1\ufe0f AuthZ",
          "time": "Morning (30m)",
          "details": "Least privilege; schema-level grants.",
          "links": [
            {
              "label": "GRANT/REVOKE",
              "href": "https://www.postgresql.org/docs/current/sql-grant.html"
            }
          ],
          "learn": "Concepts: Least privilege; schema-level grants.",
          "do": "Hands\u2011on: Least privilege; schema-level grants.",
          "aws": "Use IAM auth/Secrets Manager; Lake Formation for lake permissions."
        },
        {
          "label": "Credentials & secrets",
          "badge": "\ud83d\udd10 Secrets",
          "time": "Evening (30m)",
          "details": "Rotation, parameterization; avoid hardcoding.",
          "links": [
            {
              "label": "GRANT/REVOKE",
              "href": "https://www.postgresql.org/docs/current/sql-grant.html"
            }
          ],
          "learn": "Concepts: Rotation, parameterization; avoid hardcoding.",
          "do": "Hands\u2011on: Rotation, parameterization; avoid hardcoding.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Roles & grants and Credentials & secrets; validated via hands\u2011on tasks. Applied in AWS: Use IAM auth/Secrets Manager; Lake Formation for lake permissions."
    },
    {
      "title": "Day 21: Error Handling & Upserts",
      "items": [
        {
          "label": "Constraints in practice",
          "badge": "\ud83d\udea7 Constraints",
          "time": "Morning (30m)",
          "details": "Check errors; informative messages.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Check errors; informative messages.",
          "do": "Hands\u2011on: Check errors; informative messages.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "UPSERT patterns",
          "badge": "\u267b\ufe0f Upsert",
          "time": "Evening (30m)",
          "details": "ON CONFLICT DO UPDATE with unique keys.",
          "links": [
            {
              "label": "UPSERT (ON CONFLICT)",
              "href": "https://www.postgresql.org/docs/current/sql-insert.html#SQL-ON-CONFLICT"
            }
          ],
          "learn": "Concepts: ON CONFLICT DO UPDATE with unique keys.",
          "do": "Hands\u2011on: ON CONFLICT DO UPDATE with unique keys.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Constraints in practice and UPSERT patterns; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 22: Testing & Linting",
      "items": [
        {
          "label": "pgTAP unit tests",
          "badge": "\u2705 Tests",
          "time": "Morning (45m)",
          "details": "Test functions and queries.",
          "links": [
            {
              "label": "pgTAP",
              "href": "https://pgtap.org/"
            }
          ],
          "learn": "Concepts: Test functions and queries.",
          "do": "Hands\u2011on: Test functions and queries.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Style & code review",
          "badge": "\ud83e\uddf9 Style",
          "time": "Evening (30m)",
          "details": "Naming, comments, readability.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Naming, comments, readability.",
          "do": "Hands\u2011on: Naming, comments, readability.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: pgTAP unit tests and Style & code review; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 23: Observability",
      "items": [
        {
          "label": "pg_stat_statements",
          "badge": "\ud83d\udcca Profiling",
          "time": "Morning (30m)",
          "details": "Capture slow/mean queries.",
          "links": [
            {
              "label": "pg_stat_statements",
              "href": "https://www.postgresql.org/docs/current/pgstatstatements.html"
            }
          ],
          "learn": "Concepts: Capture slow/mean queries.",
          "do": "Hands\u2011on: Capture slow/mean queries.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Logging basics",
          "badge": "\ud83e\uddfe Logs",
          "time": "Evening (30m)",
          "details": "log_min_duration_statement; sampling.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: log_min_duration_statement; sampling.",
          "do": "Hands\u2011on: log_min_duration_statement; sampling.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: pg_stat_statements and Logging basics; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 24: Migrations 101",
      "items": [
        {
          "label": "Tooling: Alembic/Flyway",
          "badge": "\ud83d\udee0\ufe0f Migrate",
          "time": "Morning (45m)",
          "details": "Versioned schema changes.",
          "links": [
            {
              "label": "Alembic",
              "href": "https://alembic.sqlalchemy.org/"
            },
            {
              "label": "Flyway",
              "href": "https://documentation.red-gate.com/flyway"
            }
          ],
          "learn": "Concepts: Versioned schema changes.",
          "do": "Hands\u2011on: Versioned schema changes.",
          "aws": "Automate schema changes; use DMS for migrations with cutover plans."
        },
        {
          "label": "Rollback plan",
          "badge": "\u21a9\ufe0f Rollback",
          "time": "Evening (30m)",
          "details": "Reversible migrations; guards.",
          "links": [
            {
              "label": "Alembic",
              "href": "https://alembic.sqlalchemy.org/"
            },
            {
              "label": "Flyway",
              "href": "https://documentation.red-gate.com/flyway"
            }
          ],
          "learn": "Concepts: Reversible migrations; guards.",
          "do": "Hands\u2011on: Reversible migrations; guards.",
          "aws": "Right-size indexes on RDS; interpret plans; monitor with Performance Insights."
        }
      ],
      "resume": "Delivered: Tooling: Alembic/Flyway and Rollback plan; validated via hands\u2011on tasks. Applied in AWS: Automate schema changes; use DMS for migrations with cutover plans."
    },
    {
      "title": "Day 25: Modeling Project",
      "items": [
        {
          "label": "Design an ER model",
          "badge": "\ud83d\uddfa\ufe0f ERD",
          "time": "Morning (45m)",
          "details": "Entities, relationships, cardinality.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Entities, relationships, cardinality.",
          "do": "Hands\u2011on: Entities, relationships, cardinality.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Build schema",
          "badge": "\ud83c\udfd7\ufe0f Tables",
          "time": "Evening (45m)",
          "details": "Keys, indexes, seed data.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Keys, indexes, seed data.",
          "do": "Hands\u2011on: Keys, indexes, seed data.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Design an ER model and Build schema; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 26: Analytics Project",
      "items": [
        {
          "label": "Business metrics",
          "badge": "\ud83d\udcc8 Metrics",
          "time": "Morning (45m)",
          "details": "Revenue/retention/cycle time queries.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Revenue/retention/cycle time queries.",
          "do": "Hands\u2011on: Revenue/retention/cycle time queries.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Windows & CTEs",
          "badge": "\ud83e\uddf1 Compose",
          "time": "Evening (45m)",
          "details": "Combine CTEs + windows.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Combine CTEs + windows.",
          "do": "Hands\u2011on: Combine CTEs + windows.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: Business metrics and Windows & CTEs; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 27: Tuning Checklist",
      "items": [
        {
          "label": "Anti\u2011patterns",
          "badge": "\ud83d\udeab Smells",
          "time": "Morning (30m)",
          "details": "N+1 joins, functions-in-where, select *.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: N+1 joins, functions-in-where, select *.",
          "do": "Hands\u2011on: N+1 joins, functions-in-where, select *.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "System stats",
          "badge": "\ud83d\udda5\ufe0f Stats",
          "time": "Evening (30m)",
          "details": "Buffers, seq vs idx scans.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Buffers, seq vs idx scans.",
          "do": "Hands\u2011on: Buffers, seq vs idx scans.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Anti\u2011patterns and System stats; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 28: App Integration",
      "items": [
        {
          "label": "Parameterized queries",
          "badge": "\ud83d\udd12 Safety",
          "time": "Morning (30m)",
          "details": "Avoid injection; prepared statements.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Avoid injection; prepared statements.",
          "do": "Hands\u2011on: Avoid injection; prepared statements.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "ORM vs SQL",
          "badge": "\u2696\ufe0f Choice",
          "time": "Evening (30m)",
          "details": "When to drop to raw SQL.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: When to drop to raw SQL.",
          "do": "Hands\u2011on: When to drop to raw SQL.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Parameterized queries and ORM vs SQL; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 29: Review & Gaps",
      "items": [
        {
          "label": "Self\u2011assessment",
          "badge": "\ud83e\udded Review",
          "time": "Morning (30m)",
          "details": "Identify weak spots; revisit labs.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Identify weak spots; revisit labs.",
          "do": "Hands\u2011on: Identify weak spots; revisit labs.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Interview drills",
          "badge": "\ud83c\udfaf Drills",
          "time": "Evening (30m)",
          "details": "Whiteboard joins/windows; explain plans.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Whiteboard joins/windows; explain plans.",
          "do": "Hands\u2011on: Whiteboard joins/windows; explain plans.",
          "aws": "Maps to Redshift/Athena analytics; prefer Parquet and S3 partitioning."
        }
      ],
      "resume": "Delivered: Self\u2011assessment and Interview drills; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 30: Core Capstone",
      "items": [
        {
          "label": "Mini data warehouse",
          "badge": "\ud83c\udfc1 Capstone",
          "time": "Morning (60m)",
          "details": "Star schema + queries; doc decisions.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Star schema + queries; doc decisions.",
          "do": "Hands\u2011on: Star schema + queries; doc decisions.",
          "aws": "Use table partitioning and Redshift dist/sort keys; external tables over S3."
        },
        {
          "label": "Resume bullets",
          "badge": "\ud83d\udcdd Resume",
          "time": "Evening (30m)",
          "details": "Quantify results; artifacts.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Quantify results; artifacts.",
          "do": "Hands\u2011on: Quantify results; artifacts.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Mini data warehouse and Resume bullets; validated via hands\u2011on tasks. Applied in AWS: Use table partitioning and Redshift dist/sort keys; external tables over S3."
    }
  ],
  "architect": [
    {
      "title": "Day 31: Partitioning Strategies",
      "items": [
        {
          "label": "Native partitioning",
          "badge": "\ud83e\udde9 Partitions",
          "time": "Morning (45m)",
          "details": "Range/list/hash; attach/detach; pruning.",
          "links": [
            {
              "label": "Partitioning",
              "href": "https://www.postgresql.org/docs/current/ddl-partitioning.html"
            }
          ],
          "learn": "Concepts: Range/list/hash; attach/detach; pruning.",
          "do": "Hands\u2011on: Range/list/hash; attach/detach; pruning.",
          "aws": "Use table partitioning and Redshift dist/sort keys; external tables over S3."
        },
        {
          "label": "Warehouse keys",
          "badge": "\ud83c\udfd7\ufe0f Dist/Sort",
          "time": "Evening (30m)",
          "details": "Redshift dist/sort keys.",
          "links": [
            {
              "label": "Amazon Redshift",
              "href": "https://docs.aws.amazon.com/redshift/latest/dg/c_redshift-and-postgresql.html"
            }
          ],
          "learn": "Concepts: Redshift dist/sort keys.",
          "do": "Hands\u2011on: Redshift dist/sort keys.",
          "aws": "Use table partitioning and Redshift dist/sort keys; external tables over S3."
        }
      ],
      "resume": "Delivered: Native partitioning and Warehouse keys; validated via hands\u2011on tasks. Applied in AWS: Use table partitioning and Redshift dist/sort keys; external tables over S3."
    },
    {
      "title": "Day 32: Advanced Indexing",
      "items": [
        {
          "label": "GIN/GiST/BRIN",
          "badge": "\ud83c\udf32 Indexes+",
          "time": "Morning (45m)",
          "details": "Choose index by access pattern.",
          "links": [
            {
              "label": "Postgres Indexes",
              "href": "https://www.postgresql.org/docs/current/indexes.html"
            }
          ],
          "learn": "Concepts: Choose index by access pattern.",
          "do": "Hands\u2011on: Choose index by access pattern.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Trigram & FTS",
          "badge": "\ud83d\udd0e Search",
          "time": "Evening (30m)",
          "details": "pg_trgm + full\u2011text search.",
          "links": [
            {
              "label": "pg_trgm",
              "href": "https://www.postgresql.org/docs/current/pgtrgm.html"
            },
            {
              "label": "Full Text Search",
              "href": "https://www.postgresql.org/docs/current/textsearch.html"
            }
          ],
          "learn": "Concepts: pg_trgm + full\u2011text search.",
          "do": "Hands\u2011on: pg_trgm + full\u2011text search.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: GIN/GiST/BRIN and Trigram & FTS; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 33: Query Rewrites",
      "items": [
        {
          "label": "Rewrite techniques",
          "badge": "\u270d\ufe0f Rewrite",
          "time": "Morning (45m)",
          "details": "Avoid CTE materialization; lateral joins.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Avoid CTE materialization; lateral joins.",
          "do": "Hands\u2011on: Avoid CTE materialization; lateral joins.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Plan controls (careful)",
          "badge": "\u2699\ufe0f GUC",
          "time": "Evening (30m)",
          "details": "enable_nestloop/hashjoin/seqscan toggles for diagnosis.",
          "links": [
            {
              "label": "Postgres EXPLAIN",
              "href": "https://www.postgresql.org/docs/current/using-explain.html"
            }
          ],
          "learn": "Concepts: enable_nestloop/hashjoin/seqscan toggles for diagnosis.",
          "do": "Hands\u2011on: enable_nestloop/hashjoin/seqscan toggles for diagnosis.",
          "aws": "Right-size indexes on RDS; interpret plans; monitor with Performance Insights."
        }
      ],
      "resume": "Delivered: Rewrite techniques and Plan controls (careful); validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 34: Vacuum & Analyze",
      "items": [
        {
          "label": "Autovacuum tuning",
          "badge": "\ud83e\uddfd Vacuum",
          "time": "Morning (45m)",
          "details": "Bloat control; visibility map.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Bloat control; visibility map.",
          "do": "Hands\u2011on: Bloat control; visibility map.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Statistics targets",
          "badge": "\ud83d\udcca Stats",
          "time": "Evening (30m)",
          "details": "n_distinct, histograms, extended stats.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: n_distinct, histograms, extended stats.",
          "do": "Hands\u2011on: n_distinct, histograms, extended stats.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Autovacuum tuning and Statistics targets; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 35: Backup & PITR",
      "items": [
        {
          "label": "Backups",
          "badge": "\ud83d\udcbe Backup",
          "time": "Morning (45m)",
          "details": "pg_basebackup, snapshots.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: pg_basebackup, snapshots.",
          "do": "Hands\u2011on: pg_basebackup, snapshots.",
          "aws": "RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
        },
        {
          "label": "WAL & PITR",
          "badge": "\u23ee\ufe0f Recovery",
          "time": "Evening (45m)",
          "details": "WAL archiving; restore to time.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: WAL archiving; restore to time.",
          "do": "Hands\u2011on: WAL archiving; restore to time.",
          "aws": "RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
        }
      ],
      "resume": "Delivered: Backups and WAL & PITR; validated via hands\u2011on tasks. Applied in AWS: RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
    },
    {
      "title": "Day 36: Replication & HA",
      "items": [
        {
          "label": "Streaming replication",
          "badge": "\ud83d\udd01 Replica",
          "time": "Morning (45m)",
          "details": "Primary/replica; slots; failover basics.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Primary/replica; slots; failover basics.",
          "do": "Hands\u2011on: Primary/replica; slots; failover basics.",
          "aws": "RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
        },
        {
          "label": "Aurora patterns",
          "badge": "\u2601\ufe0f Aurora",
          "time": "Evening (30m)",
          "details": "Readers/writers; failover.",
          "links": [
            {
              "label": "Amazon Aurora",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"
            }
          ],
          "learn": "Concepts: Readers/writers; failover.",
          "do": "Hands\u2011on: Readers/writers; failover.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Streaming replication and Aurora patterns; validated via hands\u2011on tasks. Applied in AWS: RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
    },
    {
      "title": "Day 37: Governance & RLS",
      "items": [
        {
          "label": "Row\u2011level security",
          "badge": "\ud83d\udd10 RLS",
          "time": "Morning (45m)",
          "details": "Policies per tenant/user.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Policies per tenant/user.",
          "do": "Hands\u2011on: Policies per tenant/user.",
          "aws": "Use IAM auth/Secrets Manager; Lake Formation for lake permissions."
        },
        {
          "label": "Auditing & masking",
          "badge": "\ud83d\udd75\ufe0f Audit",
          "time": "Evening (30m)",
          "details": "pgaudit; Lake Formation.",
          "links": [
            {
              "label": "AWS Lake Formation",
              "href": "https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"
            }
          ],
          "learn": "Concepts: pgaudit; Lake Formation.",
          "do": "Hands\u2011on: pgaudit; Lake Formation.",
          "aws": "Use IAM auth/Secrets Manager; Lake Formation for lake permissions."
        }
      ],
      "resume": "Delivered: Row\u2011level security and Auditing & masking; validated via hands\u2011on tasks. Applied in AWS: Use IAM auth/Secrets Manager; Lake Formation for lake permissions."
    },
    {
      "title": "Day 38: ETL/ELT Patterns",
      "items": [
        {
          "label": "Staging & SCD",
          "badge": "\ud83d\ude9a ETL",
          "time": "Morning (45m)",
          "details": "SCD types, merge/upsert design.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: SCD types, merge/upsert design.",
          "do": "Hands\u2011on: SCD types, merge/upsert design.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Glue & DMS",
          "badge": "\ud83d\udd17 Integrations",
          "time": "Evening (45m)",
          "details": "AWS Glue jobs; DMS migration.",
          "links": [
            {
              "label": "AWS Glue",
              "href": "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html"
            },
            {
              "label": "AWS DMS",
              "href": "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"
            }
          ],
          "learn": "Concepts: AWS Glue jobs; DMS migration.",
          "do": "Hands\u2011on: AWS Glue jobs; DMS migration.",
          "aws": "Automate schema changes; use DMS for migrations with cutover plans."
        }
      ],
      "resume": "Delivered: Staging & SCD and Glue & DMS; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 39: Data Lakes & Athena",
      "items": [
        {
          "label": "Athena + Parquet",
          "badge": "\ud83e\udeb5 Lake",
          "time": "Morning (45m)",
          "details": "Partitioned S3 tables; Glue Catalog.",
          "links": [
            {
              "label": "Amazon Athena",
              "href": "https://docs.aws.amazon.com/athena/latest/ug/what-is.html"
            },
            {
              "label": "AWS Glue",
              "href": "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html"
            }
          ],
          "learn": "Concepts: Partitioned S3 tables; Glue Catalog.",
          "do": "Hands\u2011on: Partitioned S3 tables; Glue Catalog.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Redshift Spectrum",
          "badge": "\ud83d\udce1 Spectrum",
          "time": "Evening (30m)",
          "details": "Query data in S3 from Redshift.",
          "links": [
            {
              "label": "Amazon Redshift",
              "href": "https://docs.aws.amazon.com/redshift/latest/dg/c_redshift-and-postgresql.html"
            }
          ],
          "learn": "Concepts: Query data in S3 from Redshift.",
          "do": "Hands\u2011on: Query data in S3 from Redshift.",
          "aws": "Use table partitioning and Redshift dist/sort keys; external tables over S3."
        }
      ],
      "resume": "Delivered: Athena + Parquet and Redshift Spectrum; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 40: Workload Mgmt",
      "items": [
        {
          "label": "Connection pooling",
          "badge": "\ud83d\udd0c Pool",
          "time": "Morning (30m)",
          "details": "pgBouncer, server\u2011side prepare.",
          "links": [
            {
              "label": "pgBouncer",
              "href": "https://www.pgbouncer.org/"
            }
          ],
          "learn": "Concepts: pgBouncer, server\u2011side prepare.",
          "do": "Hands\u2011on: pgBouncer, server\u2011side prepare.",
          "aws": "Pool connections; configure warehouse WLM; avoid connection storms."
        },
        {
          "label": "Queuing & limits",
          "badge": "\ud83e\uddef WLM",
          "time": "Evening (30m)",
          "details": "Queue long queries; roles/queues in warehouses.",
          "links": [
            {
              "label": "Amazon Redshift",
              "href": "https://docs.aws.amazon.com/redshift/latest/dg/c_redshift-and-postgresql.html"
            }
          ],
          "learn": "Concepts: Queue long queries; roles/queues in warehouses.",
          "do": "Hands\u2011on: Queue long queries; roles/queues in warehouses.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Connection pooling and Queuing & limits; validated via hands\u2011on tasks. Applied in AWS: Pool connections; configure warehouse WLM; avoid connection storms."
    },
    {
      "title": "Day 41: Multi\u2011Tenant Design",
      "items": [
        {
          "label": "Schema vs row model",
          "badge": "\ud83c\udfe2 Tenancy",
          "time": "Morning (45m)",
          "details": "Per\u2011tenant schema vs RLS.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Per\u2011tenant schema vs RLS.",
          "do": "Hands\u2011on: Per\u2011tenant schema vs RLS.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Sharding basics",
          "badge": "\ud83e\udde9 Shard",
          "time": "Evening (30m)",
          "details": "Key selection; routing; tradeoffs.",
          "links": [
            {
              "label": "PostgreSQL Docs",
              "href": "https://www.postgresql.org/docs/current/"
            }
          ],
          "learn": "Concepts: Key selection; routing; tradeoffs.",
          "do": "Hands\u2011on: Key selection; routing; tradeoffs.",
          "aws": "RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
        }
      ],
      "resume": "Delivered: Schema vs row model and Sharding basics; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 42: Cost & Scaling",
      "items": [
        {
          "label": "Right\u2011size instances",
          "badge": "\ud83d\udcb5 Cost",
          "time": "Morning (30m)",
          "details": "CPU/RAM/IOPS; storage choices.",
          "links": [
            {
              "label": "Amazon RDS",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
            }
          ],
          "learn": "Concepts: CPU/RAM/IOPS; storage choices.",
          "do": "Hands\u2011on: CPU/RAM/IOPS; storage choices.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "Compression/encoding",
          "badge": "\ud83d\udddc\ufe0f Columnar",
          "time": "Evening (30m)",
          "details": "Redshift encodings; VACUUM SORT.",
          "links": [
            {
              "label": "Amazon Redshift",
              "href": "https://docs.aws.amazon.com/redshift/latest/dg/c_redshift-and-postgresql.html"
            }
          ],
          "learn": "Concepts: Redshift encodings; VACUUM SORT.",
          "do": "Hands\u2011on: Redshift encodings; VACUUM SORT.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Right\u2011size instances and Compression/encoding; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 43: Monitoring Deep Dive",
      "items": [
        {
          "label": "Performance Insights",
          "badge": "\ud83d\udcc8 Perf",
          "time": "Morning (30m)",
          "details": "Top waits; load chart.",
          "links": [
            {
              "label": "Performance Insights",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"
            }
          ],
          "learn": "Concepts: Top waits; load chart.",
          "do": "Hands\u2011on: Top waits; load chart.",
          "aws": "Alert on CPU/IO/storage/conn/lag; drill with Performance Insights."
        },
        {
          "label": "CloudWatch & alerts",
          "badge": "\ud83d\udd14 Alerts",
          "time": "Evening (30m)",
          "details": "Alarms on CPU/IO/QPS/latency.",
          "links": [
            {
              "label": "CloudWatch",
              "href": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
            }
          ],
          "learn": "Concepts: Alarms on CPU/IO/QPS/latency.",
          "do": "Hands\u2011on: Alarms on CPU/IO/QPS/latency.",
          "aws": "Alert on CPU/IO/storage/conn/lag; drill with Performance Insights."
        }
      ],
      "resume": "Delivered: Performance Insights and CloudWatch & alerts; validated via hands\u2011on tasks. Applied in AWS: Alert on CPU/IO/storage/conn/lag; drill with Performance Insights."
    },
    {
      "title": "Day 44: Security Deep Dive",
      "items": [
        {
          "label": "Network & TLS",
          "badge": "\ud83d\udee1\ufe0f Network",
          "time": "Morning (30m)",
          "details": "SG/NACL; TLS in transit.",
          "links": [
            {
              "label": "Amazon RDS",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
            }
          ],
          "learn": "Concepts: SG/NACL; TLS in transit.",
          "do": "Hands\u2011on: SG/NACL; TLS in transit.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        },
        {
          "label": "KMS & Secrets",
          "badge": "\ud83d\udd11 Secrets",
          "time": "Evening (30m)",
          "details": "At\u2011rest encryption; rotation.",
          "links": [
            {
              "label": "Amazon RDS",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
            }
          ],
          "learn": "Concepts: At\u2011rest encryption; rotation.",
          "do": "Hands\u2011on: At\u2011rest encryption; rotation.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: Network & TLS and KMS & Secrets; validated via hands\u2011on tasks. Applied in AWS: Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
    },
    {
      "title": "Day 45: Architect Capstone",
      "items": [
        {
          "label": "HA design on AWS",
          "badge": "\ud83c\udfc1 Capstone",
          "time": "Morning (60m)",
          "details": "Design HA/DR for prod workload.",
          "links": [
            {
              "label": "Amazon RDS",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
            },
            {
              "label": "Amazon Aurora",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"
            }
          ],
          "learn": "Concepts: Design HA/DR for prod workload.",
          "do": "Hands\u2011on: Design HA/DR for prod workload.",
          "aws": "RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
        },
        {
          "label": "Runbook & DR drill",
          "badge": "\ud83d\udcd8 Runbook",
          "time": "Evening (45m)",
          "details": "Practice failover and recovery.",
          "links": [
            {
              "label": "Amazon RDS",
              "href": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
            }
          ],
          "learn": "Concepts: Practice failover and recovery.",
          "do": "Hands\u2011on: Practice failover and recovery.",
          "aws": "Applies across RDS/Aurora/Redshift/Athena workflows in AWS."
        }
      ],
      "resume": "Delivered: HA design on AWS and Runbook & DR drill; validated via hands\u2011on tasks. Applied in AWS: RDS automated backups & PITR; Multi\u2011AZ/Aurora HA; test failovers."
    }
  ]
};
const ORDER = ["core","architect"];
const LENGTHS = {"core": TRACKS.core.length, "architect": TRACKS.architect.length};
const TOTAL_DAYS = LENGTHS.core + LENGTHS.architect;

let mode = localStorage.getItem("sql.mode") || "guided";
let track = localStorage.getItem("sql.track") || "core";
let day = 1;
let checks = JSON.parse(localStorage.getItem("sql.checks") || "{}");
let streak = Number(localStorage.getItem("sql.streak") || 0);
let lastCompletedDay = Number(localStorage.getItem("sql.lastDay") || 0);

const elMode = document.getElementById("modeSelect");
const elTrack = document.getElementById("trackSelect");
const ringText = document.getElementById("ringText");
const streakEl = document.getElementById("streak");
const completedEl = document.getElementById("completed");
const completedLabel = document.getElementById("completedLabel");
const dayTitle = document.getElementById("dayTitle");
const taskList = document.getElementById("taskList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const enableAlerts = document.getElementById("enableAlerts");
const resetBtn = document.getElementById("resetBtn");
const installBtn = document.getElementById("installBtn");
const offlineBtn = document.getElementById("offlineBtn");
const swDot = document.getElementById("swDot");
const swText = document.getElementById("swText");
const resumeBullet = document.getElementById("resumeBullet");
const copyBullet = document.getElementById("copyBullet");

function getStoredDay() {
  if (mode === "guided") return Number(localStorage.getItem("sql.day.guided") || 1);
  return Number(localStorage.getItem(`sql.day.${track}`) || 1);
}
function setStoredDay(val) {
  if (mode === "guided") localStorage.setItem("sql.day.guided", String(val));
  else localStorage.setItem(`sql.day.${track}`, String(val));
}
function mapGuidedIndex(idx) {
  let n = idx;
  for (const t of ORDER) {
    if (n <= LENGTHS[t]) return { track: t, day: n };
    n -= LENGTHS[t];
  }
  return { track: "architect", day: LENGTHS.architect };
}
function computeCompletedDays(scope) {
  const bothChecked = (t,d)=>!!checks[`${t}-${d}-0`] && !!checks[`${t}-${d}-1`];
  if (scope === "guided") {
    let total = 0; for (const t of ORDER){ for (let d=1; d<=LENGTHS[t]; d++){ if (bothChecked(t,d)) total++; } } return total;
  } else {
    let total = 0; for (let d=1; d<=LENGTHS[track]; d++){ if (bothChecked(track,d)) total++; } return total;
  }
}
function renderProgress(){
  const completed = computeCompletedDays(mode);
  const denom = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track];
  const pct = Math.round((completed/denom)*100);
  document.querySelector(".ring").style.background = `conic-gradient(var(--accent) ${pct*3.6}deg, var(--ringtrack) 0deg)`;
  ringText.textContent = pct + "%";
  completedEl.textContent = completed + " / " + denom;
  completedLabel.textContent = (mode === "guided") ? "Days Completed (All)" : "Days Completed (Track)";
  streakEl.textContent = String(streak);
}
function currentDayData(){
  if (mode === "guided") { const map = mapGuidedIndex(day); return { map, data: TRACKS[map.track][map.day-1] }; }
  return { map: { track, day }, data: TRACKS[track][day-1] };
}
function renderDay(){
  const len = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track];
  day = Math.max(1, Math.min(len, day));
  setStoredDay(day);
  elTrack.disabled = (mode === "guided"); elTrack.style.opacity = (mode === "guided") ? "0.6" : "1";

  const { map, data } = currentDayData();
  const titlePrefix = (mode === "guided") ? `Day ${day} of ${TOTAL_DAYS} — ${map.track.toUpperCase()}` : `Day ${day}`;
  dayTitle.textContent = `${titlePrefix}: ${data.title.replace(/^Day \d+:\s*/, '')}`;

  taskList.innerHTML = data.items.map((it,i)=>{
    const key = `${map.track}-${map.day}-${i}`;
    const on = !!checks[key];
    const links = (it.links||[]).map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join(' • ');
    return `<li class="task">
      <div class="check ${on?'on':''}" data-i="${i}">${on ? '✓' : ''}</div>
      <div class="content">
        <h4>${it.label}</h4>
        <div class="meta"><span class="badge">${it.badge}</span><span class="time">${it.time}</span></div>
        <p class="desc">${it.details}</p>
        <div class="outcomes">
          <p><b>What you learned:</b> ${it.learn}</p>
          <p><b>What you did:</b> ${it.do}</p>
          <p><b>AWS tie‑in:</b> ${it.aws}</p>
        </div>
        <div class="links">${links}</div>
      </div>
    </li>`;
  }).join("");

  resumeBullet.textContent = data.resume || "";

  document.querySelectorAll(".check").forEach(el => {
    el.addEventListener("click", ()=> {
      const i = Number(el.dataset.i);
      const key = `${map.track}-${map.day}-${i}`;
      checks[key] = !checks[key];
      localStorage.setItem("sql.checks", JSON.stringify(checks));
      const both = (!!checks[`${map.track}-${map.day}-0`] && !!checks[`${map.track}-${map.day}-1`]);
      if (both) {
        if (lastCompletedDay === (day-1)) streak += 1;
        if (lastCompletedDay < day) lastCompletedDay = day;
        localStorage.setItem("sql.streak", String(streak));
        localStorage.setItem("sql.lastDay", String(lastCompletedDay));
      }
      renderDay(); renderProgress();
    });
  });

  copyBullet.onclick = async () => {
    try { await navigator.clipboard.writeText(resumeBullet.textContent); copyBullet.textContent = "Copied!"; setTimeout(()=> copyBullet.textContent = "Copy bullet", 1200); }
    catch(e){ console.warn(e); }
  };
}

const init = () => { elMode.value = mode; elTrack.value = track; day = getStoredDay(); renderDay(); renderProgress(); };
prevBtn.addEventListener("click", ()=>{ const len = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track]; day = Math.max(1, day-1); renderDay(); });
nextBtn.addEventListener("click", ()=>{ const len = (mode === "guided") ? TOTAL_DAYS : LENGTHS[track]; day = Math.min(len, day+1); renderDay(); });
elTrack.addEventListener("change", ()=>{ track = elTrack.value; localStorage.setItem("sql.track", track); if (mode==='free') day = getStoredDay(); renderDay(); renderProgress(); });
elMode.addEventListener("change", ()=>{ mode = elMode.value; localStorage.setItem("sql.mode", mode); day = getStoredDay(); renderDay(); renderProgress(); });
resetBtn.addEventListener("click", ()=>{
  checks = {}; streak = 0; lastCompletedDay = 0;
  localStorage.setItem("sql.checks", JSON.stringify(checks));
  localStorage.setItem("sql.streak", "0");
  localStorage.setItem("sql.lastDay", "0");
  if (mode === "guided") localStorage.setItem("sql.day.guided", "1");
  else localStorage.setItem(`sql.day.${track}`, "1");
  renderDay(); renderProgress();
});
enableAlerts.addEventListener("click", async ()=>{
  try{ const perm = await Notification.requestPermission();
    if (perm === "granted"){ new Notification("SQL Mastery", { body: "Daily reminders enabled." }); enableAlerts.textContent = "Alerts Enabled"; }
  } catch(e){ console.warn(e); }
});
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e)=>{ e.preventDefault(); deferredPrompt = e; document.getElementById("installBtn").style.display='inline-block'; });
document.getElementById("installBtn").addEventListener('click', async ()=>{ if (!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; });
document.getElementById("offlineBtn").addEventListener('click', async ()=>{
  try{ const reg = await navigator.serviceWorker.register('./service-worker.js');
    if (reg){ document.getElementById("swDot").classList.remove('offline'); document.getElementById("swDot").classList.add('online'); document.getElementById("swText").textContent = 'Offline enabled'; }
  } catch(e){ console.error(e); }
});
init();
