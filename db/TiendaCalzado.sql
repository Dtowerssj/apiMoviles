PGDMP                         y            TiendaCalzado    13.3    13.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    49152    TiendaCalzado    DATABASE     k   CREATE DATABASE "TiendaCalzado" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE "TiendaCalzado";
                postgres    false            �            1259    49165    Botas    TABLE     �   CREATE TABLE public."Botas" (
    "Tipo" character varying NOT NULL,
    "Color" character varying NOT NULL,
    "Marca" character varying NOT NULL,
    "Cantidad" integer NOT NULL,
    "Precio" money NOT NULL,
    id integer NOT NULL
);
    DROP TABLE public."Botas";
       public         heap    postgres    false            �            1259    49180    Botas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Botas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Botas_id_seq";
       public          postgres    false    202            �           0    0    Botas_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Botas_id_seq" OWNED BY public."Botas".id;
          public          postgres    false    204            �            1259    49200    Trabajadores    TABLE     �   CREATE TABLE public."Trabajadores" (
    id integer NOT NULL,
    "Usuario" character varying NOT NULL,
    "Clave" character varying NOT NULL,
    "Salario" money
);
 "   DROP TABLE public."Trabajadores";
       public         heap    postgres    false            �            1259    49198    Trabajadores_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trabajadores_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."Trabajadores_id_seq";
       public          postgres    false    207            �           0    0    Trabajadores_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."Trabajadores_id_seq" OWNED BY public."Trabajadores".id;
          public          postgres    false    206            �            1259    49153    ZapatosDeportivos    TABLE     �   CREATE TABLE public."ZapatosDeportivos" (
    "Marca" character varying NOT NULL,
    "Color" character varying NOT NULL,
    "Cantidad" integer NOT NULL,
    "Precio" money NOT NULL,
    id integer NOT NULL
);
 '   DROP TABLE public."ZapatosDeportivos";
       public         heap    postgres    false            �            1259    49171    ZapatosDeportivos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ZapatosDeportivos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."ZapatosDeportivos_id_seq";
       public          postgres    false    200            �           0    0    ZapatosDeportivos_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public."ZapatosDeportivos_id_seq" OWNED BY public."ZapatosDeportivos".id;
          public          postgres    false    203            �            1259    49159    ZapatosElegantes    TABLE     �   CREATE TABLE public."ZapatosElegantes" (
    "Tipo" character varying NOT NULL,
    "Color" character varying NOT NULL,
    "Marca" character varying NOT NULL,
    "Cantidad" integer NOT NULL,
    "Precio" money NOT NULL,
    id integer NOT NULL
);
 &   DROP TABLE public."ZapatosElegantes";
       public         heap    postgres    false            �            1259    49189    ZapatosElegantes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."ZapatosElegantes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."ZapatosElegantes_id_seq";
       public          postgres    false    201            �           0    0    ZapatosElegantes_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public."ZapatosElegantes_id_seq" OWNED BY public."ZapatosElegantes".id;
          public          postgres    false    205            :           2604    49182    Botas id    DEFAULT     h   ALTER TABLE ONLY public."Botas" ALTER COLUMN id SET DEFAULT nextval('public."Botas_id_seq"'::regclass);
 9   ALTER TABLE public."Botas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    202            ;           2604    49203    Trabajadores id    DEFAULT     v   ALTER TABLE ONLY public."Trabajadores" ALTER COLUMN id SET DEFAULT nextval('public."Trabajadores_id_seq"'::regclass);
 @   ALTER TABLE public."Trabajadores" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            8           2604    49173    ZapatosDeportivos id    DEFAULT     �   ALTER TABLE ONLY public."ZapatosDeportivos" ALTER COLUMN id SET DEFAULT nextval('public."ZapatosDeportivos_id_seq"'::regclass);
 E   ALTER TABLE public."ZapatosDeportivos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    200            9           2604    49191    ZapatosElegantes id    DEFAULT     ~   ALTER TABLE ONLY public."ZapatosElegantes" ALTER COLUMN id SET DEFAULT nextval('public."ZapatosElegantes_id_seq"'::regclass);
 D   ALTER TABLE public."ZapatosElegantes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    201            �          0    49165    Botas 
   TABLE DATA           U   COPY public."Botas" ("Tipo", "Color", "Marca", "Cantidad", "Precio", id) FROM stdin;
    public          postgres    false    202   �       �          0    49200    Trabajadores 
   TABLE DATA           K   COPY public."Trabajadores" (id, "Usuario", "Clave", "Salario") FROM stdin;
    public          postgres    false    207   �        �          0    49153    ZapatosDeportivos 
   TABLE DATA           Y   COPY public."ZapatosDeportivos" ("Marca", "Color", "Cantidad", "Precio", id) FROM stdin;
    public          postgres    false    200   !       �          0    49159    ZapatosElegantes 
   TABLE DATA           `   COPY public."ZapatosElegantes" ("Tipo", "Color", "Marca", "Cantidad", "Precio", id) FROM stdin;
    public          postgres    false    201   }!       �           0    0    Botas_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Botas_id_seq"', 5, true);
          public          postgres    false    204            �           0    0    Trabajadores_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."Trabajadores_id_seq"', 2, true);
          public          postgres    false    206            �           0    0    ZapatosDeportivos_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."ZapatosDeportivos_id_seq"', 8, true);
          public          postgres    false    203            �           0    0    ZapatosElegantes_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."ZapatosElegantes_id_seq"', 4, true);
          public          postgres    false    205            =           2606    49208    Trabajadores Trabajadores_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Trabajadores"
    ADD CONSTRAINT "Trabajadores_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."Trabajadores" DROP CONSTRAINT "Trabajadores_pkey";
       public            postgres    false    207            �   �   x�M�1
�@��z�{ �$&�ִ���66��20���f����yo�I\%�����t�ݓ�##L[T�`�E<���2e�}^o���ӷ,P�Ú4����68�j(��)�����R7G������.vC>��tT��d@�^Ѕt������ze�cc�$�@�      �   m   x�3�L)�/*J-�4426�420�10PxԴ��&S\̩b��bh��_n��k�R��X��_���푚`�����f���d�ob�X��b����i�03F��� ֞"      �   T   x�sL�LI,�t�I�K��44�41�10PxԴ�ӈ+�47��/5�(��Ȅ�� &c�����P� �旙��il�iWa����� (��      �   v   x���ON,��K-��M,*:�9H��%��er�q��(<jZ�i���X���_��X�闚^���X�_�id�iWe����2-(?+_�R�)'1/9�ӽ499����Ԉ+F��� �Z(.     